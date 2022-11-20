console.log ("Hello YouCode :)")

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let USD = 4.52;
let EUR = 4.67;
let GBP = 5.37;
let AUD = 3.01;
let CAD = 3.37;
let JPY = 3.22;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
   
    let amount = amountElement.value;
    let currency = currencyElement.value;
    
    let result;

    switch (currency) {

        case "USD":
            result = amount / USD;
            break;

        case "EUR":
            result = amount / EUR;
            break;

        case "GBP":
            result = amount / GBP;
            break;

        case "AUD":
            result = amount / AUD;
            break;

        case "CAD":
            result = amount / CAD;
            break;

        case "JPY":
            result = amount / JPY;
    }

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});