const convertButton = document.querySelector(".convert-button")
const currencyselect = document.querySelector(".currency-select")

function convertValues() {
   const inputCurrencyValue = document.querySelector(".input-currency").value
   const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueToConverted = document.querySelector(".currency-value")


   const dolartoday = 6.02
   const eurotoday = 6.24


   if (currencyselect.value == "dolar") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("en-US", {
         style: "currency",
         currency: "USD"
      }).format(inputCurrencyValue / dolartoday)

   }

   if (currencyselect.value == "euro") {
      currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / eurotoday)
   }

   currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
   }).format(inputCurrencyValue)

}
function changeCurrency() {
   const currencyname = document.getElementById("currency-name")
   const currencyimage = document.querySelector(".currency-image")

   if (currencyselect.value == "dolar") {
      currencyname.innerHTML = "dolar"
      currencyimage.src = "./assets/estados-unidos (1) 1.png"
   }

   if (currencyselect.value == "euro") {
      currencyname.innerHTML = "euro"
      currencyimage.src = "./assets/Euro.png"
   }

   convertValues()
}

currencyselect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
