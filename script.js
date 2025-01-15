const convertButton = document.querySelector(".convert-button");

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").Value;
    const currencyValueToconvert = document.querySelector(".currency-value-convert-to");
    const currencyValueToconverted = document.querySelector(".currency-value");
    const dolarToday = 5.2;

    const convertedValue = inputCurrencyValue / dolarToday;
    
    currencyValueToconvert.innerHTML = inputCurrencyValue;
    currencyValueToconverted.innerHTML = convertedValue;


    console.log(convertedValue);
}


convertButton.addEventListener("click", convertValues);