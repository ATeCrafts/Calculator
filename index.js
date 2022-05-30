let number1;
let number2;
let operator;
let buttonClick = new Audio("./Button Click Sound.mp3");
let display = document.getElementById("display");
let result;
let round;
let numberRounded;
const pi = Math.PI;

window.onload = windowLoad();

function windowLoad() {
    number1 = null;
    number2 = null;
    operator = null;
    display.innerHTML = "<font color='black'> . </font>";
    result = null;
    round = null;
    numberRounded = false;
}

function key1() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "1";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "1";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "1";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "1";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 1;
        } else if (round !== null) {
            round = (round * 10) + 1;
        }
    }
}
function key2() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "2";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "2";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "2";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "2";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 2;
        } else if (round !== null) {
            round = (round * 10) + 2;
        }
    }
}
function key3() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "3";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "3";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "3";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "3";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 3;
        } else if (round !== null) {
            round = (round * 10) + 3;
        }
    }
}
function key4() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "4";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "4";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "4";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "4";
            
            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 4;
        } else if (round !== null) {
            round = (round * 10) + 4;
        }
    }
}
function key5() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "5";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "5";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "5";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "5";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 5;
        } else if (round !== null) {
            round = (round * 10) + 5;
        }
    }
}
function key6() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "6";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "6";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "6";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "6";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 6;
        } else if (round !== null) {
            round = (round * 10) + 6;
        }
    }
}
function key7() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "7";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "7";

           if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "7";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "7";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 7;
        } else if (round !== null) {
            round = (round * 10) + 7;
        }
    }
}
function key8() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "8";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "8";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "8";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "8";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 8;
        } else if (round !== null) {
            round = (round * 10) + 8;
        }
    }
}
function key9() {
    buttonClick.play();
    
    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "9";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "9";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "9";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "9";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 9;
        } else if (round !== null) {
            round = (round * 10) + 9;
        }
    }
}
function key0() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null && operator === null) {
            number1 = "0";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = "0";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator === null) {
            number1 = number1 + "0";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + "0";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    } else if (numberRounded === true) {
        if (round === null) {
            round = 0;
        } else if (round !== null) {
            round = (round * 10) + 0;
        }
    }
}
function keyDecimal() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null) {
            number1 = ".";
            display.innerHTML = number1;
        } else if (number1 !== null && operator === null) {
            number1 = number1 + ".";
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = ".";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 + ".";

            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    }
}

function keyAdd() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "+";

        display.innerHTML = number1 + " " + operator;
    }
}
function keySubtract() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "-";

        display.innerHTML = number1 + " " + operator;
    }
}
function keyMultiply() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "*";

        display.innerHTML = number1 + " " + operator;
    }
}
function keyDivide() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "/";

        display.innerHTML = number1 + " " + operator;
    }
}
function keyEquals() {
    buttonClick.play();

    if (round === null) {
        round = 17;
    }

    if (numberRounded === false) {
        if (number1 !== null && operator !== null && number2 !== null && result === null) {
            if (operator === "+") {
                result = parseFloat(number1) + parseFloat(number2);
                result = result.toFixed(round);
                display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
            }
            if (operator === "-") {
                result = parseFloat(number1) - parseFloat(number2);
                result = result.toFixed(round);
                display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
            }
            if (operator === "*") {
                result = parseFloat(number1) * parseFloat(number2);
                result = result.toFixed(round);
                display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
            }
            if (operator === "/") {
                result = parseFloat(number1) / parseFloat(number2);
                result = result.toFixed(round);
                display.innerHTML = number1 + " " + operator + " " + number2 + " = <font color='red'>" + result + "</font>";
            }
            if (operator === "^") {
                result = parseFloat(number1) ** parseFloat(number2);
                result = result.toFixed(round);
                display.innerHTML = number1 + "<sup>" + number2 + "</sup> = <font color='red'>" + result + "</font>";
            }
            if (operator === "√") {
                result = Math.pow(parseFloat(number1), 1/(parseFloat(number2)));
                result = result.toFixed(round);
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1 + " = <font color='red'>" + result + "</font>";
            }
            if (operator === "%") {
                result = (parseFloat(number1) * parseFloat(number2)) / 100;
                result = result.toFixed(round);
                display.innerHTML = number1 + " % of " + number2 + " = <font color='red'>" + result + "</font>";
            }
        }
    } else if (numberRounded === true) {
        numberRounded = false;
    }
}

function keyRound() {
    buttonClick.play();

    numberRounded = true;
}

function keyPI() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 === null) {
            number1 = pi;
            display.innerHTML = number1;
        } else if (number1 !== null && operator === null) {
            number1 = number1 * pi;
            display.innerHTML = number1;
        } else if (number1 !== null && operator !== null && number2 === null) {
            number2 = pi;
            display.innerHTML = number1 + " " + operator + " " + number2;
        } else if (number1 !== null && operator !== null && number2 !== null) {
            number2 = number2 * pi;
            display.innerHTML = number1 + " " + operator + " " + number2;
        }
    }
}
function keySquare() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 !== null && operator === null) {
            if (round === null) {
                round = 17;
            }

            result = parseFloat(number1) ** 2;
            result = result.toFixed(round);
            display.innerHTML = number1 + "² = <font color='red'>" + result + "</font>";
        }
    }
}
function keyCube() {
    buttonClick.play();

    if (numberRounded === false) {
        if (number1 !== null && operator === null) {
            if (round === null) {
                round = 17;
            }

            result = parseFloat(number1) ** 3;
            result = result.toFixed(round);
            display.innerHTML = number1 + "³ = <font color='red'>" + result + "</font>";
        }
    }
}
function keyPower() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "^";

        display.innerHTML = number1 + "ʸ";
    }
}
function keySquareRoot() {
    buttonClick.play();

    if (numberRounded === false) {
        if (round === null) {
            round = 17;
        }

        result = Math.pow(parseFloat(number1), 1/2);
        result = result.toFixed(round);
        display.innerHTML = "√" + number1 + " = <font color='red'>" + result + "</font>";
    }
}
function keyCubeRoot() {
    buttonClick.play();

    if (numberRounded === false) {
        if (round === null) {
            round = 17;
        }

        result = Math.pow(parseFloat(number1), 1/3);
        result = result.toFixed(round);
        display.innerHTML = "√" + number1 + " = <font color='red'>" + result + "</font>";
    }
}
function keyRoot() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "√";

        display.innerHTML = "ʸ√" + number1;
    }
}
function keyPercent() {
    buttonClick.play();

    if (numberRounded === false) {
        operator = "%";

        display.innerHTML = number1 + " % of";
    }
}

function keyAC() {
    buttonClick.play();

    setInterval(function() {
        location.reload();
    }, 200);
}
function keyDelete() {
    buttonClick.play();

    if (number1 !== null && operator === null) {
        number1 = number1.substr(0, number1.length - 1);
        display.innerHTML = number1;
        
        if (number1 === "") {
            display.innerHTML = "<font color='black'> . </font>";
        }
    } else if (number1 !== null && operator !== null && number2 === null) {
        operator = null;
        display.innerHTML = number1;
    } else if (number1 !== null && operator !== null && number2 !== null) {
        number2 = number2.substr(0, number2.length - 1);
        
        if (number2 === "") {
            number2 = null;
            
            if (operator === "^") {
                display.innerHTML = number1 + "<sup> y </sup>";
            } else if (operator === "√") {
                display.innerHTML = "√" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of";
            } else {
                display.innerHTML = number1 + " " + operator;
            }
        } else {
            if (operator === "^") {
                display.innerHTML = number1 + "<sup>" + number2 + "</sup>";
            } else if (operator === "√") {
                display.innerHTML = "<sup>" + number2 + "</sup> √" + number1;
            } else if (operator === "%") {
                display.innerHTML = number1 + " % of " + number2;
            } else {
                display.innerHTML = number1 + " " + operator + " " + number2;
            }
        }
    }
}