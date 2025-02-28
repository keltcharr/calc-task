"use strict"

let numbers = [];
let mathOperator = [];
let inputValue = 0;
let inputOperator = "";
let mathExpression = "";
let result = 0;
let i = 0;

// debugger;

do {
    inputValue = inputNumber();
    numbers[i] = inputValue;
    inputOperator = inputMathOperator();
    mathOperator[i] = inputOperator;
    mathExpression += inputValue + " " + inputOperator + " ";
    log();
    i++;
} while (inputOperator !== "=");

result = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    switch (mathOperator[i]) {
        case "+":
            result += numbers[i + 1];
            break;
        case "-":
            result -= numbers[i + 1];
            break;
        case "*":
            result *= numbers[i + 1];
            break;
        case "/":
            result /= numbers[i + 1];
            break;
        case "=":
            alert(`Результат вычисления выражения ${mathExpression} ${result}`);
            break;
    };
};

function inputNumber() {
    let num = prompt("Введите число:")

    while (true) {
        if (isNaN(num)) {
            num = prompt("Вы ввели не число! Повторите ввод:");
        }
        else {
            return Number(num);
        };
    };
};

function inputMathOperator() {
    let operator = prompt("Введите математический оператор (+, -, *, /, =)");

    while (true) {
        if (operator === "+" || operator === "-" || operator === "*" || operator === "/" || operator === "=") {
            return operator.trim();
        }
        else {
            operator = prompt("Вы ввели не оператор! Повторите ввод (+, -, *, /, =)")
        };
    };
};1

function log() {
    console.log(`=============================
        шаг: ${i}
        выражение: ${mathExpression}
        число: ${numbers[i]}
        оператор: ${mathOperator[i]}
        =============================`)
};