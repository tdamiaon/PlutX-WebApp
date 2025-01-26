const loginButton = document.getElementById('login-button');
const signUpButton = document.getElementById('signup-button');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalButton = document.getElementById('close-modal');
const container = document.querySelector('.button-container');
const userProfile = document.getElementById('user-profile');
const listaInicialEmpresas = [{ symbol: "AAPL", logo: "https://logo.clearbit.com/https://www.apple.com" }, { symbol: "NVDA", logo: "https://logo.clearbit.com/https://www.nvidia.com" }, { symbol: "GOOG", logo: "https://logo.clearbit.com/https://www.google.com" }, { symbol: "TSLA", logo: "https://logo.clearbit.com/https://www.tesla.com" }, { symbol: "AMZN", logo: "https://logo.clearbit.com/https://www.amazon.com" }, { symbol: "MSFT", logo: "https://logo.clearbit.com/https://www.microsoft.com" }, { symbol: "META", logo: "https://logo.clearbit.com/https://www.meta.com" }, { symbol: "NFLX", logo: "https://logo.clearbit.com/https://www.netflix.com" }, { symbol: "AMD", logo: "https://logo.clearbit.com/https://www.amd.com" }, { symbol: "INTC", logo: "https://logo.clearbit.com/https://www.intel.com" }, { symbol: "DIS", logo: "https://logo.clearbit.com/https://www.disney.com" }, { symbol: "VZ", logo: "https://logo.clearbit.com/https://www.verizon.com" }, { symbol: "IBM", logo: "https://logo.clearbit.com/https://www.ibm.com" }, { symbol: "PYPL", logo: "https://logo.clearbit.com/https://www.paypal.com" }, { symbol: "SPOT", logo: "https://logo.clearbit.com/https://www.spotify.com" }, { symbol: "BA", logo: "https://logo.clearbit.com/https://www.boeing.com" }, { symbol: "PFE", logo: "https://logo.clearbit.com/https://www.pfizer.com" }, { symbol: "JNJ", logo: "https://logo.clearbit.com/https://www.jnj.com" }, { symbol: "KO", logo: "https://logo.clearbit.com/https://www.coca-colacompany.com" }, { symbol: "WMT", logo: "https://logo.clearbit.com/https://www.walmart.com" }, { symbol: "ORCL", logo: "https://logo.clearbit.com/https://www.oracle.com" }, { symbol: "GOOGL", logo: "https://logo.clearbit.com/https://www.google.com" }, { symbol: "TSM", logo: "https://logo.clearbit.com/https://www.tsmc.com" }, { symbol: "BABA", logo: "https://logo.clearbit.com/https://www.alibaba.com" }, { symbol: "INTU", logo: "https://logo.clearbit.com/https://www.intuit.com" }, { symbol: "SQ", logo: "https://logo.clearbit.com/https://www.squareup.com" }, { symbol: "LYFT", logo: "https://logo.clearbit.com/https://www.lyft.com" }, { symbol: "UBER", logo: "https://logo.clearbit.com/https://www.uber.com" }, { symbol: "CRM", logo: "https://logo.clearbit.com/https://www.salesforce.com" }, { symbol: "GS", logo: "https://logo.clearbit.com/https://www.goldmansachs.com" }, { symbol: "BA", logo: "https://logo.clearbit.com/https://www.boeing.com" }, { symbol: "AMT", logo: "https://logo.clearbit.com/https://www.americantower.com" }, { symbol: "MCD", logo: "https://logo.clearbit.com/https://www.mcdonalds.com" }, { symbol: "DIS", logo: "https://logo.clearbit.com/https://www.disney.com" }, { symbol: "GS", logo: "https://logo.clearbit.com/https://www.goldmansachs.com" }, { symbol: "UNH", logo: "https://logo.clearbit.com/https://www.unitedhealthgroup.com" }, { symbol: "XOM", logo: "https://logo.clearbit.com/https://www.exxonmobil.com" }, { symbol: "CVX", logo: "https://logo.clearbit.com/https://www.chevron.com" }, { symbol: "AXP", logo: "https://logo.clearbit.com/https://www.americanexpress.com" }, { symbol: "HD", logo: "https://logo.clearbit.com/https://www.homedepot.com" }, { symbol: "V", logo: "https://logo.clearbit.com/https://www.visa.com" }, { symbol: "MA", logo: "https://logo.clearbit.com/https://www.mastercard.com" }, { symbol: "BA", logo: "https://logo.clearbit.com/https://www.boeing.com" }, { symbol: "PFE", logo: "https://logo.clearbit.com/https://www.pfizer.com" }, { symbol: "JNJ", logo: "https://logo.clearbit.com/https://www.jnj.com" }, { symbol: "KO", logo: "https://logo.clearbit.com/https://www.coca-colacompany.com" }, { symbol: "WMT", logo: "https://logo.clearbit.com/https://www.walmart.com" }, { symbol: "T", logo: "https://logo.clearbit.com/https://www.att.com" }, { symbol: "SBUX", logo: "https://logo.clearbit.com/https://www.starbucks.com" }, { symbol: "LMT", logo: "https://logo.clearbit.com/https://www.lockheedmartin.com" }, { symbol: "VZ", logo: "https://logo.clearbit.com/https://www.verizon.com" }, { symbol: "CVS", logo: "https://logo.clearbit.com/https://www.cvs.com" }, { symbol: "WBA", logo: "https://logo.clearbit.com/https://www.walgreens.com" }, { symbol: "AMGN", logo: "https://logo.clearbit.com/https://www.amgen.com" }, { symbol: "PFE", logo: "https://logo.clearbit.com/https://www.pfizer.com" }, { symbol: "ABT", logo: "https://logo.clearbit.com/https://www.abbott.com" }, { symbol: "PEP", logo: "https://logo.clearbit.com/https://www.pepsico.com" }, { symbol: "KO", logo: "https://logo.clearbit.com/https://www.coca-colacompany.com" }, { symbol: "CVX", logo: "https://logo.clearbit.com/https://www.chevron.com" }, { symbol: "TGT", logo: "https://logo.clearbit.com/https://www.target.com" }, { symbol: "UPS", logo: "https://logo.clearbit.com/https://www.ups.com" }, { symbol: "LULU", logo: "https://logo.clearbit.com/https://www.lululemon.com" }, { symbol: "BUD", logo: "https://logo.clearbit.com/https://www.ab-inbev.com" }, { symbol: "NFLX", logo: "https://logo.clearbit.com/https://www.netflix.com" }, { symbol: "ADBE", logo: "https://logo.clearbit.com/https://www.adobe.com" }, { symbol: "GS", logo: "https://logo.clearbit.com/https://www.goldmansachs.com" }, { symbol: "WFC", logo: "https://logo.clearbit.com/https://www.wellsfargo.com" }, { symbol: "COF", logo: "https://logo.clearbit.com/https://www.capitalone.com" }, { symbol: "COST", logo: "https://logo.clearbit.com/https://www.costco.com" }, { symbol: "LOW", logo: "https://logo.clearbit.com/https://www.lowes.com" }, { symbol: "T", logo: "https://logo.clearbit.com/https://www.att.com" }, { symbol: "XOM", logo: "https://logo.clearbit.com/https://www.exxonmobil.com" }, { symbol: "CVS", logo: "https://logo.clearbit.com/https://www.cvs.com" }, { symbol: "MO", logo: "https://logo.clearbit.com/https://www.altria.com" }, { symbol: "PFE", logo: "https://logo.clearbit.com/https://www.pfizer.com" }, { symbol: "PEP", logo: "https://logo.clearbit.com/https://www.pepsico.com" }, { symbol: "GM", logo: "https://logo.clearbit.com/https://www.gm.com" }, { symbol: "F", logo: "https://logo.clearbit.com/https://www.ford.com" }, { symbol: "LMT", logo: "https://logo.clearbit.com/https://www.lockheedmartin.com" }];


loginButton.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('show');    
});
signUpButton.addEventListener('click', () => {
  modalOverlay.classList.remove('hidden');
  modalOverlay.classList.add('show');    
});


closeModalButton.addEventListener('click', () => {
  modalOverlay.classList.remove('show');  
  modalOverlay.classList.add('hidden');  
});


modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) {
    modalOverlay.classList.remove('show');
    modalOverlay.classList.add('hidden');
  }
});


document.addEventListener('DOMContentLoaded', () => {
  modalOverlay.classList.add('hidden');
});



function criarBotoes(listaDeEmpresas) {
    if (!container) {
        console.warn('No container');
        return;
    }
    
    container.innerHTML = ''; 
    listaDeEmpresas.forEach(empresa => {
        const botaoEmpresa = document.createElement('button');
        const imageDiv = document.createElement('div');
        imageDiv.style.backgroundImage = `url('${empresa.logo}')`;
        imageDiv.classList.add('background-image'); 
        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = empresa.symbol;

        botaoEmpresa.appendChild(imageDiv);
        botaoEmpresa.appendChild(textDiv);

        botaoEmpresa.addEventListener('click', () => {
            openCompanyPage(empresa.symbol)

        });

        container.appendChild(botaoEmpresa);
    });

    const buttons = document.querySelectorAll('.button-container button');
    buttons.forEach((button) => {
        button.style.position = 'relative';
    });
}



if (container) {
    container.addEventListener('mousemove', (e) => {
        const buttons = document.querySelectorAll('.button-container button');

        buttons.forEach((button) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            button.style.setProperty('--spotlight-x', `${x}px`);
            button.style.setProperty('--spotlight-y', `${y}px`);
        });
    });

    container.addEventListener('mouseleave', () => {
        const buttons = document.querySelectorAll('.button-container button');

        buttons.forEach((button) => {
            button.style.setProperty('--spotlight-x', `-9999px`);
            button.style.setProperty('--spotlight-y', `-9999px`);
        });
    });
}

async function fetchCompanyData(symbol) {//               fetchCompanyData(symbol)
    try {
        const response = await fetch(`http://127.0.0.1:8000/api/company-data/?symbol=${symbol}`);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        return(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        return;
    }
}


function showToast(message, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;

    Object.assign(toast.style, {
        position: "fixed",
        bottom: "20px",
        right: "20px",
        padding: "10px 20px",
        backgroundColor: type === "error" ? "#f44336" : "#2196F3", // Green for success
        color: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        zIndex: 1000,
        opacity: 0,
        transition: "opacity 0.3s ease-in-out",
    });

    document.body.appendChild(toast);

    setTimeout(() => (toast.style.opacity = 1), 10); // Show
    setTimeout(() => {
        toast.style.opacity = 0; // Hide
        setTimeout(() => document.body.removeChild(toast), 300);
    }, 3000);
}

async function login(username, password) {
    const userEntry = document.getElementById("username");
    const passEntry = document.getElementById("password");
    const wrongLogin = document.getElementById("wrongLogin");
    try {
        const body = JSON.stringify({ username, password });
        const response = await fetch("http://127.0.0.1:8000/api/token-auth/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        userEntry.style.setProperty("outline", "none", "important");
        passEntry.style.setProperty("outline", "none", "important");
        wrongLogin.style.setProperty("display", "none", "important");
        const data = await response.json();
        sessionStorage.setItem("authToken", data.token);
        sessionStorage.setItem("name", username);
        console.log("Token recebido:", sessionStorage.getItem("authToken"), sessionStorage.getItem("name"));
        UpdateUI();
        modalOverlay.classList.remove('show');  
        modalOverlay.classList.add('hidden');

        showToast("Successfully logged in!", "success");

    } catch (error) {
        console.error("Erro ao realizar login:", error);
        userEntry.style.setProperty("outline", "2px solid red", "important");
        passEntry.style.setProperty("outline", "2px solid red", "important");
        wrongLogin.style.setProperty("display", "flex", "important");
        wrongLogin.innerText = "Incorrect username or password";
    }
}

document.getElementById("loginButton").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    login(username, password);
});

async function register(username, password) {
    const userEntry = document.getElementById("username");
    const passEntry = document.getElementById("password");
    const wrongLogin = document.getElementById("wrongLogin");
    try {
        const body = JSON.stringify({ username, password });
        if (password.length <= 7){
            passEntry.style.setProperty("outline", "2px solid red", "important");
            userEntry.style.setProperty("outline", "none", "important");
            wrongLogin.style.setProperty("display", "flex", "important");
            wrongLogin.innerText = "Password must have at least 8 characters";
            return;
        }
        const response = await fetch("http://127.0.0.1:8000/api/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
        });
        if (!response.ok) {
            throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        
        
    } catch (error) {
        console.error("Erro ao realizar registro:", error);
        passEntry.style.setProperty("outline", "2px solid red", "important");
        userEntry.style.setProperty("outline", "2px solid red", "important");
        wrongLogin.style.setProperty("display", "flex", "important");
        wrongLogin.innerText = "Username Already Exists, try Login";
    }
}
document.getElementById("signupButton").addEventListener("click", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    register(username, password);
});

async function getPrediction(symbol, timeForward) {           //UpdateUI
    try {
        const url = `http://127.0.0.1:8000/api/prediction/?symbol=${symbol}&timeForward=${timeForward}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Prevision: ", data);
        return(data);
    } catch (error) {
        console.error("Error:", error);
        return;
    }
}

document.getElementById("view_pass").addEventListener("click", function (event) {
        const passEntry = document.getElementById("password");
        const button = document.getElementById("view_pass");
        const icon = button.querySelector("i");

        if (passEntry.type === "password") {
            passEntry.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash"); 
        } else {
            passEntry.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }
});


document.addEventListener("DOMContentLoaded", () => {
    UpdateUI();
});
function UpdateUI() {           //UpdateUI
    EmpresasBotoes()
    const authToken = sessionStorage.getItem("authToken");

    if (authToken) {
        loginButton.style.display = "none";
        signUpButton.style.display = "none";
        userProfile.style.display = "flex"; 
        document.getElementById('name').textContent = sessionStorage.getItem("name");
    } else {
        loginButton.style.display = "block";
        signUpButton.style.display = "block";
        userProfile.style.display = "none";
    }
}



async function fetchFavorites(){           //fetchFavorites
    const authToken = sessionStorage.getItem("authToken");
    if (!authToken) {
        console.error("Token de autenticação não encontrado no sessionStorage.");
        return;
    }
    try {
        const response = await fetch("http://127.0.0.1:8000/api/favorites/", {
            method: "GET",
            headers: {
                "Authorization": `Token ${authToken}`,
                "Content-Type": "application/json"
            }
        });
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Favoritos:", data);
        return data;
    } catch (error) {
        console.error("Erro ao buscar os favoritos:", error);
    }
}



async function gerarListaEmpresas() {
    try {
        const favoritos = await fetchFavorites();

        let listaEmpresas;

        if (favoritos && favoritos.length > 0) {
            const empresasNaoDuplicadas = listaInicialEmpresas.filter(inicial => {
                return !favoritos.some(favorito => favorito.symbol === inicial.symbol);
            });
            listaEmpresas = [...favoritos, ...empresasNaoDuplicadas];
        } else {
            listaEmpresas = [...listaInicialEmpresas];
        }
        return listaEmpresas;
    } catch (error) {
        console.error("Erro ao gerar a lista de empresas:", error);
        return [...listaInicialEmpresas];
    }
}
async function EmpresasBotoes() {          //EmpresasBotoes
    try {
        const listaEmpresas = await gerarListaEmpresas();
        if (!Array.isArray(listaEmpresas)) {
            console.error("Error: O resultado de gerarListaEmpresas não é um array", listaEmpresas);
            return;
        }
        criarBotoes(listaEmpresas);
    } catch (error) {
        console.error("Erro ao carregar e exibir os botões:", error);
    }
}

async function addFavorite(symbol) { //         addFavorite(symbol)

    const authToken = sessionStorage.getItem("authToken");

    if (!authToken) {
        console.error("Not logged in");
        return;
    }
    try {
        const response = await fetch("http://127.0.0.1:8000/api/favorites/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${authToken}`
            },
            body: JSON.stringify({ symbol })
        });
        if (!response.ok) {
            const errorMsg = await response.text();
            throw new Error(`Error: ${response.status} - ${errorMsg}`);
        }
        const data = await response.json();
        console.log("API msg:", data);
        UpdateUI();

    } catch (error) {
        console.error("Error", error);
    }
}


function signed(number) {
    if (number > 0) {
        return "+" + number;
    }
    else {
        return number.toString();
    }
}

function openCompanyPage(symbol) {
    window.location.href = "companyPage.html?company=" + encodeURIComponent(symbol);
}

function getQueryParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function processStockData(dataObj) {
  const labels = Object.keys(dataObj);

  const data = labels.map(date => {
    const value = Array.isArray(dataObj[date]) ? dataObj[date][3] : dataObj[date];
    return parseFloat(value.toFixed(2));
  });

  return {
    labels: labels,
    data: data,
  };
}
async function updateFavoriteButton(symbol, data) {
    document.getElementById("company-title").innerHTML = `${data.name} 
        <button id="favorite-button" class="favorite-button">
            <i class="fas fa-heart"></i>
        </button>`;
    const favoritesData = await fetchFavorites();
    console.log("Dados recebidos de fetchFavorites:", favoritesData);
    const favoritesArray = favoritesData.map(fav => fav.symbol);
    console.log("Array dos favs:", favoritesArray);
    const isFavorite = favoritesArray.includes(symbol);
    const favoriteButton = document.getElementById("favorite-button");
    if (isFavorite) {
        favoriteButton.classList.add("red");
    } else {
        favoriteButton.classList.add("white");
    }
    favoriteButton.addEventListener("click", async function () {
        if (favoriteButton.classList.contains("red")) {
            favoriteButton.classList.remove("red");
            favoriteButton.classList.add("white");
            showToast(`${symbol} Removed from favorites`);
            await addFavorite(symbol);
        } else {
            favoriteButton.classList.remove("white");
            favoriteButton.classList.add("red");
            showToast(`${symbol} Added to favorites`);
            await addFavorite(symbol);
        }
    });
}

function loadCompanyPage() {
    const symbol = getQueryParameter("company");
    document.getElementById("loading-overlay").style.display = "flex";

    fetchCompanyData(symbol).then(data => {
        let currencySymbol = "";

        switch (data.currency) {
            case "EUR":
                currencySymbol = "€";
                break;
            case "USD":
                currencySymbol = "$";
                break;
            case "GBP":
                currencySymbol = "£";
                break;
            case "AUD":
                currencySymbol = "A$";
                break;
            case "CAD":
                currencySymbol = "C$";
                break;
            case "CHF":
                currencySymbol = "CHF";
                break;
            case "BRL":
                currencySymbol = "R$";
                break;
            case "MXN":
                currencySymbol = "$";
                break;
            default:
                currencySymbol = data.currency;
        }

        updateFavoriteButton(symbol, { name: data.name });



        document.getElementById("loading-overlay").style.display = "none";
        document.body.style.cursor = "auto";
        document.getElementById("last-price").textContent = `${data.latest_price.toFixed(2)}${currencySymbol}`;

        const variationsElement = document.getElementById("variations");
        const dayVariation = data.day_variation;
        const dayVariationPercentage = data.day_variationpercentage;
        variationsElement.textContent = `${signed(dayVariationPercentage.toFixed(2))}% ${signed(dayVariation.toFixed(2))}${currencySymbol}`;
        if (dayVariation > 0) {
            variationsElement.style.color = "green";
        } else if (dayVariation < 0) {
            variationsElement.style.color = "red";
        } else {
            variationsElement.style.color = "white";
        }

        const buttons = document.querySelectorAll(".timeframe-button");
        buttons.forEach(button => {
            button.addEventListener("click", () => {
                buttons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");

                const selectedPeriod = button.getAttribute("data-period");
                console.log(`Selected Period: ${selectedPeriod}`);

                const periodData = data[selectedPeriod]; 
                const processedData = processStockData(periodData);
                updateChart(processedData.labels, processedData.data);
            });
        });


        const chartButtons = document.querySelectorAll(".chart-type-button");
        chartButtons.forEach(button => {
            button.addEventListener("click", () => {
                chartButtons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                const selectedChartType = button.getAttribute("data-chart");
                console.log(`Tipo de gráfico selecionado: ${selectedChartType}`);
            });
        });

        document.getElementById("annual-variation").textContent = 
            data.annual_variation != null ? data.annual_variation.toFixed(2) : "unavailable";
        document.getElementById("average-volume").textContent = 
            data.more_information.averageVolume != null ? data.more_information.averageVolume : "unavailable";
        document.getElementById("dividend-yield").textContent = 
            data.more_information.dividendYield != null 
                ? `${(data.more_information.dividendYield * 100).toFixed(2)}%` 
                : "unavailable";
        document.getElementById("market-cap").textContent = 
            data.more_information.marketCap != null 
                ? data.more_information.marketCap.toLocaleString() 
                : "unavailable";
        document.getElementById("trailingPE").textContent = 
            data.more_information.trailingPE != null 
                ? data.more_information.trailingPE.toFixed(2) 
                : "unavailable";
        document.getElementById("revenueGrowth").textContent = 
            data.more_information.revenueGrowth != null 
                ? `${(data.more_information.revenueGrowth * 100).toFixed(2)}%` 
                : "unavailable";
        document.getElementById("netIncomeToCommon").textContent = 
            data.more_information.netIncomeToCommon != null 
                ? data.more_information.netIncomeToCommon.toLocaleString() 
                : "unavailable";
        document.getElementById("grossMargins").textContent = 
            data.more_information.grossMargins != null 
                ? `${(data.more_information.grossMargins * 100).toFixed(2)}%` 
                : "unavailable";
        document.getElementById("beta").textContent = 
            data.more_information.beta != null 
                ? data.more_information.beta.toFixed(2) 
                : "unavailable";
        document.getElementById("ceo").textContent = 
            data.more_information.companyOfficers[0] != null 
                ? data.more_information.companyOfficers[0].name 
                : "unavailable";
        document.getElementById("headquarters").textContent = 
            data.more_information.address1 != null && data.more_information.city != null &&
            data.more_information.state != null && data.more_information.country != null 
                ? `${data.more_information.address1}, ${data.more_information.city}, ${data.more_information.state}, ${data.more_information.zip}, ${data.more_information.country}` 
                : "unavailable";
        document.getElementById("employees").textContent = 
            data.more_information.fullTimeEmployees != null 
                ? data.more_information.fullTimeEmployees.toLocaleString() 
                : "unavailable";
        document.getElementById("website").textContent = 
            data.more_information.website != null 
                ? data.more_information.website 
                : "unavailable";

        const ctx = document.getElementById("myChart").getContext("2d");

        const chartdata = {
            labels: [

            ],
            datasets: [
                {
                    data: [],
                    borderColor: "rgba(0, 255, 0, 1)",
                    backgroundColor: "rgba(0, 255, 0, 0)",
                    pointRadius: 1, // Ajuste do raio do ponto, se necessário
                    hitRadius: 10, // Aumentar o hitRadius para facilitar a interação

                    tension: 0.1,
                },
            ],
        };

        const config = {
            type: "line",
            data: chartdata,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                        position: "top",
                    },
                    tooltip: {
                        enabled: true,
                        mode: 'nearest',
                        intersect: false,
                    },
                },
                interaction: {
                    mode: 'nearest',
                    intersect: false,},
                scales: {
                    x: {
                        type:'category',
                        title: {
                            display: false,
                        },
                    },
                    y: {
                        title: {
                            display: false,
                        },
                    },
                },
            },
        };

        let chartInstance = new Chart(ctx, config);

        function updateChart(newLabels, newData) {
            chartInstance.data.labels = newLabels;
            chartInstance.data.datasets[0].data = newData;
            chartInstance.update();
        }
        const initialData = processStockData(data["1D"]);
        updateChart(initialData.labels, initialData.data);

        document.getElementById("text-company").textContent=data.more_information.longBusinessSummary;


    });
}

window.onload = loadCompanyPage;









async function handleSearchClick() {
    document.body.style.setProperty('cursor', 'wait', 'important');
    setTimeout(async () => {
        const searchInput = document.getElementById("search");
        const symbol = searchInput.value.trim().toUpperCase();

        if (!symbol) {
            document.body.style.cursor = 'default';
            showToast("Please enter a valid company symbol.", "error");
            return;
        }

        try {
            const companyData = await fetchCompanyData(symbol);

            if (companyData) {
                console.log(companyData);
                openCompanyPage(symbol);
            } else {
                showToast("Company not found. Please try a different symbol.", "error");
            }
        } catch (error) {
            showToast("An error occurred while fetching data. Try again later.", "error");
            console.log(error);
        } finally {
            document.body.style.cursor = 'default';
        }
    }, 0);
}

document.querySelector(".search-icon").addEventListener("click", handleSearchClick);

document.getElementById("search")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        handleSearchClick()
    }
});





const signOutButton = document.getElementById('signOutButton');
function toggleSignOutButton(event) {
    const rect = userProfile.getBoundingClientRect();
    signOutButton.style.top = `${rect.bottom}px`;
    signOutButton.style.left = `${rect.left}px`;
    
    if (signOutButton.style.display === 'none') {
        signOutButton.style.display = 'block';
    } else {
        signOutButton.style.display = 'none';
    }
}
userProfile.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleSignOutButton(event);
});
signOutButton.addEventListener('click', (event) => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("name");
    window.location.href = "index.html"
    signOutButton.style.display = 'none';
    event.stopPropagation();
});
window.addEventListener('click', () => {
    if (signOutButton.style.display === 'block') {
        signOutButton.style.display = 'none';
    }
});


async function predictVariation() {
    const days = document.getElementById('days').value;
    const resultDiv = document.getElementById('result');
    const viabilityLabel = document.getElementById('viability-label');
    const viabilityFill = document.getElementById('viability-fill');
    const body = document.body;

    if (!days || days <= 0) {
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'Please enter a valid number of days.';
        resultDiv.style.backgroundColor = '#dc2626';
        resultDiv.style.color = '#fff';
        return;
    }

    try {
        body.style.cursor = 'wait';
        const [value, viability] = await aiPredictVariation(days);
        resultDiv.style.display = 'block';
        resultDiv.textContent = `Expected Value: ${value.toFixed(2)}`;
        resultDiv.style.backgroundColor = value > 0 ? '#16a34a' : '#dc2626';
        resultDiv.style.color = '#fff';
        const viabilityPercentage = (viability / 6) * 100;
        viabilityFill.style.width = `${viabilityPercentage}%`;

        if (viability <= 1) {
            viabilityFill.style.backgroundColor = '#dc2626';
            viabilityLabel.textContent = 'Low';
        } else if (viability <= 2) {
            viabilityFill.style.backgroundColor = '#ea580c';
            viabilityLabel.textContent = 'Low';
        } else if (viability <= 3) {
            viabilityFill.style.backgroundColor = '#f59e0b';
            viabilityLabel.textContent = 'Medium';
        } else if (viability <= 4) {
            viabilityFill.style.backgroundColor = '#d97706';
            viabilityLabel.textContent = 'Medium';
        } else if (viability <= 5) {
            viabilityFill.style.backgroundColor = '#16a34a';
            viabilityLabel.textContent = 'High';
        } else {
            viabilityFill.style.backgroundColor = '#15803d';
            viabilityLabel.textContent = 'High';
        }
    } catch (error) {
        console.error('Error during prediction:', error);
        resultDiv.style.display = 'block';
        resultDiv.textContent = 'An error occurred while predicting. Please try again.';
        resultDiv.style.backgroundColor = '#dc2626';
        resultDiv.style.color = '#fff';
    } finally {
        body.style.cursor = 'default';
    }
}

async function aiPredictVariation(days) {
    const symbol = getQueryParameter("company");
    const prediction = await getPrediction(symbol, days);
    console.log(prediction);
    const value = prediction.predicted_value;
    const viability = prediction.viability;
    console.log([value, viability]);
    return [value, viability];
}



