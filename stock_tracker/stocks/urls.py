from django.urls import path, include
from .views import CompanyDataView, RegisterUserView, FavoriteCompanyView, PredictionView
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    path('api/company-data/', CompanyDataView.as_view(), name='company-data'),#curl -X GET "http://127.0.0.1:8000/api/company-data/?symbol=EDP"

    path('api/token-auth/', obtain_auth_token, name='token-auth'),#login basically
    path('api/register/', RegisterUserView.as_view(), name='register'),#curl -X POST http://127.0.0.1:8000/api/register/ -H "Content-Type: application/json" -d "{\"username\": \"tester\", \"password\": \"testertester\"}"    para registo
    #curl -X POST http://127.0.0.1:8000/api/token-auth/ -H "Content-Type: application/json" -d "{\"username\": \"tester\", \"password\": \"testertester\"}"    para receber token
    path('api/favorites/', FavoriteCompanyView.as_view(), name='favorites'),
    #curl -X POST http://127.0.0.1:8000/api/favorites/ -H "Content-Type: application/json" -H "Authorization: Token a3d0ed5483997dd8737ce21922b80f60e91c7b53" -d "{\"symbol\": \"DIS\"}"     Post de favoritas
    #curl -X GET http://127.0.0.1:8000/api/favorites/ -H "Authorization: Token a3d0ed5483997dd8737ce21922b80f60e91c7b53"       Get de favoritas
    path('api/prediction/', PredictionView.as_view(), name='prediction')
    #curl -X GET "http://127.0.0.1:8000/api/prediction/?symbol=AAPL&timeForward=1"

]

#curl -X POST http://127.0.0.1:8000/api/register/ -H "Content-Type: application/json" -d "{\"username\": \"a\", \"password\": \"b\"}"