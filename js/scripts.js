console.log("Hello YouCode :)")

{
    const calculateResult = (amount, currency) => {
        const USD = 4.52;
        const EUR = 4.67;
        const GBP = 5.37;
        const AUD = 3.01;
        const CAD = 3.37;
        const JPY = 3.22;

        switch (currency) {

            case "USD":
                return amount / USD;

            case "EUR":
                return amount / EUR;

            case "GBP":
                return amount / GBP;

            case "AUD":
                return amount / AUD;

            case "CAD":
                return amount / CAD;

            case "JPY":
                return amount / JPY;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value
        const currency = currencyElement.value

        const result = calculateResult(amount, currency)

        updateResultText(amount, result, currency)
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}