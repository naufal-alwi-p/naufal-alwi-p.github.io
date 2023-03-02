/* ----------------------------- Calculator ----------------------------- */

const screenCalc = document.getElementById("output");
const numberKeys = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const decimalBtn = document.querySelector(".decimal");
const resultBtn = document.querySelector(".result");
const percentBtn = document.querySelector(".percent");

const historyTabs = document.querySelector(".history-content");
const resetHistory = document.querySelector(".history-title div");

let operatorType;
let number1;
let number2;
let result;

const yearElement = document.querySelector(".year");
const year = (new Date()).getUTCFullYear();

numberKeys.forEach((key) => {
    key.addEventListener("click", (a) => {
        if(screenCalc.value === "0") {
            if(a.target.textContent !== "0") {
                screenCalc.value = a.target.textContent;
            }
        } else {
            if(result) {
                screenCalc.value = a.target.textContent;
                result = undefined;
            } else {
                screenCalc.value += a.target.textContent;
            }
        }
    });
});

operators.forEach((operator) => {
    operator.addEventListener("click", (a) => {
        number1 = Number(screenCalc.value);
        screenCalc.value = "";
        operatorType = a.target.textContent.charCodeAt();
    });
});

resultBtn.addEventListener("click", () => {
    if(number1 && screenCalc.value) {
        number2 = Number(screenCalc.value);
        calculation(operatorType);
    }
});

clearBtn.addEventListener("click", () => {
    screenCalc.value = "";
    operatorType = undefined;
    number1 = 0;
    number2 = 0;
});

decimalBtn.addEventListener("click", () => {
    if(screenCalc.value !== "" && !(screenCalc.value.includes("."))) {
        if(result) {
            result = undefined;
        }
        screenCalc.value += ".";
    }
});

percentBtn.addEventListener("click", () => {
    if(screenCalc.value) {
        if(result) {
            result = undefined;
        }
        screenCalc.value = Number(screenCalc.value) / 100;
    }
});

resetHistory.addEventListener("click", () => {
    historyTabs.innerHTML = "";
});

function calculation(operatorType) {
    switch(operatorType) {
        case 43:
            result = number1 + number2;

            historyTabs.innerHTML += `
            <div class="history-list">
                <p class="history-equation">${number1} + ${number2}</p>
                <p class="history-result">= ${result}</p>
            </div>
            `;
            break;
        case 45:
            result = number1 - number2;

            historyTabs.innerHTML += `
            <div class="history-list">
                <p class="history-equation">${number1} - ${number2}</p>
                <p class="history-result">= ${result}</p>
            </div>
            `;
            break;
        case 215:
            result = number1 * number2;

            historyTabs.innerHTML += `
            <div class="history-list">
                <p class="history-equation">${number1} &times; ${number2}</p>
                <p class="history-result">= ${result}</p>
            </div>
            `;
            break;
        case 247:
            result = number1 / number2;

            historyTabs.innerHTML += `
            <div class="history-list">
                <p class="history-equation">${number1} &divide; ${number2}</p>
                <p class="history-result">= ${result}</p>
            </div>
            `;
            break;
        default:
            screenCalc.value = "Something is Wrong :(";
    }

    screenCalc.value = result;
    operatorType = undefined;
    number1 = undefined;
    number2 = undefined;

}

/* ----------------------------- Calculator ----------------------------- */

// Footer Element
yearElement.textContent = year;
