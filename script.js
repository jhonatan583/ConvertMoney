const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueToConverted = document.querySelector(".currency-value")


   const dolartoday = 5.91
   const eurotoday = 6.19
   const libratoday = 7.38
   const bitcointoday = 628711


   if (currencyselect.value == "Dólar") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolartoday)

   }

   if (currencyselect.value == "Euro") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / eurotoday)
   }

   if (currencyselect.value == "Libra") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "GBP"
      }).format(inputCurrencyValue / libratoday)

   }

   if (currencyselect.value == "Bitcoin") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "BTC"
      }).format(inputCurrencyValue / bitcointoday)
   }
   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

}
function changeCurrency() {
   const currencyname = document.getElementById("currency-name")
   const currencyimage = document.querySelector(".currency-image")

   if (currencyselect.value == "Dólar") {
      currencyname.innerHTML = "Dólar"
      currencyimage.src = "./assets/estados-unidos (1) 1.png"
   }

   if (currencyselect.value == "Euro") {
      currencyname.innerHTML = "Euro"
      currencyimage.src = "./assets/Euro.png"
   }

   if (currencyselect.value == "Libra") {
      currencyname.innerHTML = "Libra"
      currencyimage.src = "./assets/libra-moeda.png"
      currencyimage.style.width = "50px";
   }

   if (currencyselect.value == "Bitcoin") {
      currencyname.innerHTML = "Bitcoin"
      currencyimage.src = "./assets/bitcoin-logo.png"
      currencyimage.style.width = "80px";
   }

   convertValues()
}

currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
