let number1;
let number2;
let operator;
let buttonClick = new Audio("./Button Click Sound.mp3");
let display = document.getElementById("display");
let result;

window.onload = windowLoad();

function windowLoad() {
    number1 = null;
    number2 = null;
    operator = null;
    display.innerHTML = "<font color='black'> . </font>";
    result = null;
}

function key1() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "1";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "1";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "1";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "1";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key2() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "2";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "2";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "2";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "2";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key3() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "3";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "3";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "3";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "3";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key4() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "4";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "4";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "4";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "4";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key5() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "5";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "5";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "5";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "5";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key6() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "6";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "6";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "6";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "6";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key7() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "7";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "7";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "7";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "7";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key8() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "8";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "8";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "8";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "8";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key9() {
    buttonClick.play();
    
    if (number1 === null && operator === null) {
        number1 = "9";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "9";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "9";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "9";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function key0() {
    buttonClick.play();

    if (number1 === null && operator === null) {
        number1 = "0";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = "0";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + "0";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + "0";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}
function keyDecimal() {
    buttonClick.play();

    if (number1 === null) {
        number1 = ".";
        display.innerHTML = number1;
    } else if (number1 !== null && operator === null) {
        number1 = number1 + ".";
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 === null) {
        number2 = ".";
        display.innerHTML = number1 + " " + operator + " " + number2;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2 + ".";
        display.innerHTML = number1 + " " + operator + " " + number2;
    }
}

function keyAdd() {
    buttonClick.play();

    operator = "+";

    display.innerHTML = number1 + " " + operator;
}
function keySubtract() {
    buttonClick.play();

    operator = "-";

    display.innerHTML = number1 + " " + operator;
}
function keyMultiply() {
    buttonClick.play();

    operator = "*";

    display.innerHTML = number1 + " " + operator;
}
function keyDivide() {
    buttonClick.play();

    operator = "/";

    display.innerHTML = number1 + " " + operator;
}
function keyEquals() {
    buttonClick.play();

    if (number1 !== null && operator !== null && number2 !== null && result === null) {
        if (operator === "+") {
            result = parseFloat(number1) + parseFloat(number2);
            display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
        }
        if (operator === "-") {
            result = parseFloat(number1) - parseFloat(number2);
            display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
        }
        if (operator === "*") {
            result = parseFloat(number1) * parseFloat(number2);
            display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
        }
        if (operator === "/") {
            result = parseFloat(number1) / parseFloat(number2);
            display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
        }
    }
}