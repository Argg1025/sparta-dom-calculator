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
    return `${num1} ${op} ${num2} = ${total} `;
}