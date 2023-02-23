function calculate(operation) {
    let result;
    const num1 = Number(document.querySelector("#num1").value);
    const num2 = Number(document.querySelector("#num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Введите числа");
        return;
    }

    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
    }

    document.querySelector("#result").value = result;
}

function clearValues() {
    document.querySelector("#num1").value = "";
    document.querySelector("#num2").value = "";
    document.querySelector("#result").value = "";
}
