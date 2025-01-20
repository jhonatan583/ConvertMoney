const convertButton = document.querySelector(".convert-button")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueToConverted = document.querySelector(".currency-value")

   const dolartoday = 6.4

   const convertedvalue = inputCurrencyValue / dolartoday 

currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
   style: "currency",
   currency: "BRL"
}).format(inputCurrencyValue)

currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
   style: "currency",
   currency: "USD"
}).format(convertedvalue)

  console.log(convertedvalue)
   
}

convertButton.addEventListener("click", convertValues)
