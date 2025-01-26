import requests
import redis
import json
from datetime import datetime, timedelta
import yfinance as yf
from pickle import NONE
import yfinance as yf
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_squared_error


#redis_client = redis.StrictRedis(host='localhost', port=6379, db=0, decode_responses=True)

def get_stock_info(symbol):
    try:
        stock = yf.Ticker(symbol)
        try:
            history = stock.history(period="10y")
            history.index = history.index.tz_localize(None)
        except Exception as e:
            history = None

        try:
            oneday = stock.history(period='1d', interval='1m') 
            oneday.index = oneday.index.tz_localize(None)
        except Exception as e:
            oneday = None

        name = stock.info.get("longName", "Unknown")
        currency = stock.info.get("currency", "Unknown")
        latest_price = history["Close"].iloc[-1] if history is not None and not history.empty else None

        def filter_daily_prices(start_date):
            if history is None or history.empty:
                return {}
            filtered_history = history[history.index >= start_date]
            return {
                date.strftime("%Y-%m-%d"): (row.get("Open"), row.get("High"), row.get("Low"), row.get("Close"), row.get("Volume"))
                for date, row in filtered_history.iterrows()
            }

        now = datetime.now()
        daily_prices_1M = filter_daily_prices(now - timedelta(days=30))
        daily_prices_6M = filter_daily_prices(now - timedelta(days=180))
        daily_prices_YTD = filter_daily_prices(datetime(now.year, 1, 1)) 
        daily_prices_1Y = filter_daily_prices(now - timedelta(days=365))
        daily_prices_5Y = filter_daily_prices(now - timedelta(days=1826))

        cutoff_date = now - timedelta(days=10*365)
        if history is not None and not history.empty:
            recent_history = history[history.index >= cutoff_date].copy()
            daily_prices = {
                date.strftime("%Y-%m-%d"): (row.get("Open"), row.get("High"), row.get("Low"), row.get("Close"), row.get("Volume"))
                for date, row in recent_history.iterrows()
            }

            recent_history["Month"] = recent_history.index.to_period("M")
            monthly_prices = {}
            for period, group in recent_history.groupby("Month"):
                group_start = group.iloc[0]
                group_end = group.iloc[-1]
                monthly_prices[str(period)] = (
                    group_start.get("Open"),
                    group["High"].max(),
                    group["Low"].min(),
                    group_end.get("Close"),
                    group["Volume"].sum()
                )
        else:
            daily_prices = {}
            monthly_prices = {}

        try:
            year_ago_date = now - timedelta(days=365)
            closest_year_ago = history.index[abs(history.index - year_ago_date).argmin()] if history is not None else None
            year_ago_price = history.loc[closest_year_ago]["Close"] if closest_year_ago is not None else None
            annual_variation = (latest_price - year_ago_price) / year_ago_price * 100 if year_ago_price else None
        except Exception as e:
            annual_variation = None

        try:
            yesterday_price = history["Close"].iloc[-2] if history is not None and len(history) > 1 else None
            daily_variation = (latest_price - yesterday_price) / yesterday_price * 100 if yesterday_price else None
        except Exception as e:
            daily_variation = None

        if oneday is not None and not oneday.empty:
            intraday_prices = {
                index.strftime("%H-%M-%S"): row.get("Close")
                for index, row in oneday.iterrows()
            }
        else:
            intraday_prices = {}

        more_information = stock.info if stock.info else {}
        logotype = f"https://logo.clearbit.com/{more_information.get('website', '')}"

        stock_data = {
            "name": name,
            "symbol": symbol,
            "latest_price": latest_price,
            "currency": currency,
            "MAX": daily_prices,
            "1M": daily_prices_1M,
            "6M": daily_prices_6M,
            "YTD": daily_prices_YTD,
            "1Y": daily_prices_1Y,
            "5Y": daily_prices_5Y,
            "1D": intraday_prices,
            "monthly_prices": monthly_prices,
            "annual_variation": annual_variation,
            "day_variationpercentage": daily_variation,
            "day_variation": daily_variation * yesterday_price / 100 if daily_variation and yesterday_price else None,
            "more_information": more_information,
            "logotype": logotype,
        }
        if stock_data['MAX']:
            return stock_data
        else:return()
    
    except Exception as e:
        return ()

    


def predict(symbol, timeForward):
    try:
        timeForward = int(timeForward)
        data = yf.download(symbol, period="max")

        data['SMA_10'] = data['Close'].rolling(window=10).mean()
        data['SMA_50'] = data['Close'].rolling(window=50).mean()
        data['Volatility'] = data['Close'].rolling(window=10).std()

        data['Target'] = data['Close'].shift(-timeForward)
        data.dropna(inplace=True)  # Limpa Nans

        X = data[['SMA_10', 'SMA_50', 'Volatility']]
        y = data['Target']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=69)  # 20% para testar, 80% para aprender

        model = RandomForestRegressor(n_estimators=101, random_state=69)  # 201 árvores na floresta
        model.fit(X_train, y_train)

        predictions = model.predict(X_test)

        r2 = r2_score(y_test, predictions)

        mse = mean_squared_error(y_test, predictions)
    
        match mse:
            case mse if mse == 0:
                viability = 6
            case mse if 0 < mse < 1:
                viability = 5
            case mse if 1 <= mse < 5:
                viability = 4
            case mse if 5 <= mse < 15:
                viability = 3
            case mse if 15 <= mse < 30:
                viability = 2
            case mse if 30 <= mse < 50:
                viability = 1
            case mse if mse >= 50:
                viability = 0
            case _:
                viability = None

        latest_data = data[['SMA_10', 'SMA_50', 'Volatility']].iloc[-1].values.reshape(1, -1)  # Ultima coluna da matriz e torna-a num vetor 1,3

        predicted_value = model.predict(latest_data)
        
        return {
            "predicted_value": predicted_value[0].round(2),
            "r2_score": r2,
            "mean_squared_error": mse,
            "viability": viability
        }
    except Exception as e:
        return {"error": str(e)}
def get_logo(symbol):
    ticker = yf.Ticker(symbol)
    company_info = ticker.info
    website= company_info.get('website')
    logotype = f"https://logo.clearbit.com/{website}"
    return logotype







