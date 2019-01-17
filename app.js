document.addEventListener("DOMContentLoaded", function () {

    // ==== Calculator function ====
    function calc(num1, num2, op) {
        if (op === "+") {
            total = parseFloat(num1) + parseFloat(num2)
        } else if (op === "-") {
            total = parseFloat(num1) - parseFloat(num2)
        } else if (op === "x") {
            total = parseFloat(num1) * parseFloat(num2)
        } else if (op === "/") {
            total = parseFloat(num1) / parseFloat(num2)
        }
        return `${num1}${op}${num2}=${total} `;
    }

    // ==== Squareroot Function ====
    function sqrt(num2) {
        squareRoot = Math.sqrt(num2);
        return `√${num2}=${squareRoot}`;
    }

    // ==== Clear Function ====
    function clear() {
        n1 = "";
        n2 = "";
        operation = "";
        // total = "";
        clicks = 1;
        answer.innerText = "";
    }

    // ==== Variable declaration ====
    const smallButtons = document.getElementsByClassName('col-3');
    const bigButton = document.getElementById('enter');
    const answer = document.getElementById('answer');
    let clicks = 1;
    let n1 = "";
    let n2 = "";
    let operation = "";

    // ==== Change Mouse Pointer ====
    for (let i = 0; i < smallButtons.length; i++) {
        smallButtons[i].addEventListener('mouseover', function () {
            smallButtons[i].style.cursor = "pointer";
        })
    }
    bigButton.addEventListener('mouseover', function () {
        bigButton.style.cursor = "pointer";
    })

    // ==== Click Event Generator For All Of The Small Buttons ====
    for (let i = 0; i < smallButtons.length; i++) {
        smallButtons[i].addEventListener('mousedown', function () {
            switch (clicks) {
                case 1:
                    if (smallButtons[i].innerText === '+' || smallButtons[i].innerText === '-' || smallButtons[i].innerText === 'x' || smallButtons[i].innerText === '/') {
                        operation = smallButtons[i].innerText;
                        clicks++;
                        answer.innerText = answer.innerText + operation;
                    } else if (smallButtons[i].innerText === '√') {
                        n1 = 0;
                        operation = smallButtons[i].innerText;
                        clicks++;
                        answer.innerText = answer.innerText + operation;
                    } else if (smallButtons[i].innerText === 'C') {
                        clear();
                    } else {
                        n1 = n1 + smallButtons[i].innerText;
                        answer.innerText = answer.innerText + n1.substr(-1);
                    }
                    break;
                case 2:
                    if (smallButtons[i].innerText === 'C') {
                        clear()
                    } else {
                        n2 = n2 + smallButtons[i].innerText;
                        answer.innerText = answer.innerText + n2.substr(-1);
                    }
                    break;
                default:

            }
        })
    }

    // ==== Equals Button Events ====
    bigButton.addEventListener('mousedown', function () {

        if (operation === "√") {
            answer.innerText = sqrt(n2);
        } else {
            answer.innerText = calc(n1, n2, operation);
        }

    })








});