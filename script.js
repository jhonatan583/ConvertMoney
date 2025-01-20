const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues(){
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueToConverted = document.querySelector(".currency-value")

   
   const dolartoday = 6.02
   const eurotoday = 6.24


   if(currencyselect.value == "dolar"){
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US",{ 
         style: "currency",
         currency: "USD"
   }).format(inputCurrencyValue / dolartoday)

   }

   if(currencyselect.value =="euro"){
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE",{
         style: "currency",
         currency: "EUR"
   }).format(inputCurrencyValue / eurotoday)
   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)



  console.log(convertButton)
   
}

convertButton.addEventListener("click", convertValues)
