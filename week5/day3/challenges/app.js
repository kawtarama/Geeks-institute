
(() => {
  const apiBase = "https://open.er-api.com/v6/latest/";

  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("fromCurrency");
  const toCurrencySelect = document.getElementById("toCurrency");
  const switchBtn = document.getElementById("switchBtn");
  const convertBtn = document.getElementById("convertBtn");
  const loadingDiv = document.getElementById("loading");
  const errorDiv = document.getElementById("error");
  const resultSection = document.getElementById("resultSection");
  const resultAmount = document.getElementById("resultAmount");
  const resultDetails = document.getElementById("resultDetails");
  const rateInfo = document.getElementById("rateInfo");


  let exchangeRates = null;
  let lastBase = null;


  async function fetchSupportedCurrencies() {
    showLoading(true);
    try {
     
      const response = await fetch(apiBase + "USD");
      if (!response.ok) throw new Error("Failed to fetch currencies.");
      const data = await response.json();
      if (data.result !== "success") throw new Error(data.error || "API Error");

      const currencies = Object.keys(data.rates).sort();
      populateCurrencySelects(currencies);
      // Set default selected values
      fromCurrencySelect.value = "USD";
      toCurrencySelect.value = "EUR";

      // Cache the rates for USD base initially
      exchangeRates = data.rates;
      lastBase = "USD";

    } catch (error) {
      showError(error.message);
    } finally {
      showLoading(false);
    }
  }

  function populateCurrencySelects(currencies) {
    for (const currency of currencies) {
      const option1 = document.createElement("option");
      option1.value = currency;
      option1.textContent = currency;

      const option2 = option1.cloneNode(true);

      fromCurrencySelect.appendChild(option1);
      toCurrencySelect.appendChild(option2);
    }
  }

  function showLoading(show) {
    loadingDiv.classList.toggle("show", show);
  }

  function showError(message) {
    errorDiv.textContent = message;
    errorDiv.classList.add("show");
  }

  function clearError() {
    errorDiv.textContent = "";
    errorDiv.classList.remove("show");
  }

  // Fetch exchange rates for a given base currency
  async function fetchRates(base) {
    if (exchangeRates && base === lastBase) {
      return exchangeRates; // use cached
    }

    showLoading(true);
    clearError();
    try {
      const response = await fetch(apiBase + base);
      if (!response.ok) throw new Error("Failed to fetch exchange rates.");
      const data = await response.json();
      if (data.result !== "success") throw new Error(data.error || "API Error");

      exchangeRates = data.rates;
      lastBase = base;
      return exchangeRates;
    } catch (error) {
      showError(error.message);
      return null;
    } finally {
      showLoading(false);
    }
  }

  // Perform currency conversion and update UI
  async function convertCurrency(e) {
    e.preventDefault();
    clearError();
    resultSection.classList.remove("show");

    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (!amount || amount <= 0) {
      showError("Please enter a valid amount greater than zero.");
      return;
    }
    if (!fromCurrency) {
      showError("Please select a currency to convert from.");
      return;
    }
    if (!toCurrency) {
      showError("Please select a currency to convert to.");
      return;
    }
    if (fromCurrency === toCurrency) {
      showError("Please select two different currencies.");
      return;
    }

    const rates = await fetchRates(fromCurrency);
    if (!rates) return; // error displayed already

    const rate = rates[toCurrency];
    if (!rate) {
      showError(`Exchange rate not found for ${toCurrency}.`);
      return;
    }

    const convertedAmount = amount * rate;

    resultAmount.textContent = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    resultDetails.textContent = `Exchange Rate: 1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;

    // Also show rate for reverse conversion
    const reverseRate = 1 / rate;
    rateInfo.textContent = `1 ${toCurrency} = ${reverseRate.toFixed(4)} ${fromCurrency}`;

    resultSection.classList.add("show");
  }

  // Switch the "from" and "to" currency selections
  function switchCurrencies() {
    const fromVal = fromCurrencySelect.value;
    const toVal = toCurrencySelect.value;

    fromCurrencySelect.value = toVal;
    toCurrencySelect.value = fromVal;

    // If there's an amount and currencies, convert automatically after switch
    if (amountInput.value && fromCurrencySelect.value && toCurrencySelect.value) {
      convertCurrency(new Event("submit"));
    }
  }

  // Initialization
  function init() {
    fetchSupportedCurrencies();

    convertBtn.addEventListener("click", convertCurrency);
    switchBtn.addEventListener("click", switchCurrencies);

    // Optional: convert on Enter key press in amount input
    amountInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        convertCurrency(new Event("submit"));
      }
    });
  }

  // Start the app
  init();
})();
