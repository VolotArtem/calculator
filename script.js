let digitArray = []
let firstNumber = "";
let secondNumber = "";
let operation = null;
let inputFieldReset = false; /* added not my code */

const outputField = document.querySelector(".output")
const summBtn = document.getElementById("summ")
const multiplyBtn = document.getElementById("multiply")
const clean = document.getElementById("clean")
const digit = document.querySelectorAll(".digit")
const operate = document.querySelectorAll(".operator")
const finish = document.getElementById("=")
const point = document.getElementById(".")

/* add active button for set nubmer on screen*/
digit.forEach(element => element.addEventListener("click", () => setNumber(element)))
/*add active operate button for set operate */
operate.forEach(element => element.addEventListener("click", () => setOperator(element)))

outputField.textContent = "0"

function setNumber(element) {
    if (outputField.textContent === '0' || inputFieldReset) resetInput()/*//не моя придумка, взял кусок кода из интернета для сброса 
    поля от стандартного значения 0, чтобы 0 не появлялся впереди цифр которые вводил юзер*/
    outputField.textContent += element.textContent
}
//не моя придумка, взял кусок кода из интернета для сброса поля от стандартного значения 0, чтобы 0 не появлялся впереди цифр которые вводил юзер
function resetInput() {
    outputField.textContent = ''
    inputFieldReset = false
}
// click on operator and if operator non save, then save first nubmer and operator 
function setOperator(element) {
    if (operation !== null) result()
    firstNumber = outputField.textContent
    operation = element.id
    // outputField.textContent = `${firstNumber} ${operation} `
    inputFieldReset = true /* added not my code , add need to clear field to the next set nubmer */
}
// if operation not save and field dont need to clear check if operator = / and field =0 then out message that null not divide, else 
// save second nubmer and cal func calculate for out result, then operation save null for new сycle
function result() {
    if (operation === null || inputFieldReset) return
    if (operation === "/" && outputField.textContent === "0") {
        (alert("Are you sure about this?"))
        return false;
    }

    secondNumber = outputField.textContent
    outputField.textContent = calculate(operation, firstNumber, secondNumber)
    operation = null;

}

// function for math
function add(a, b) {
    return a + b
}

// function for math
function substract(a, b) {
    return a - b

}

// function for math
function multiply(a, b) {
    return a * b
}

// function for math
function divide(a, b) {
    return a / b
}

// function for math
function persent(a, b) {
    return a * b / 100
}

// function for calculate
function calculate(operation, a, b) {
    a = Number(a) //change type sting to nubmer
    b = Number(b) //change type sting to nubmer

    switch (operation) { //if operation = + * / % -  used needed case whos return func for math
        case "+":
            return add(a, b)

        case "*":
            return multiply(a, b)

        case "/":
            return divide(a, b)

        case "%":
            return persent(a, b)

        case "-":
            return substract(a, b)
    }
}

// function for clear btn reset all 
function clear() {
    outputField.textContent = "0"
    firstNumber = "";
    secondNumber = "0";
    operation = null;
}

clean.addEventListener("click", clear) // active clear button

// equals button active
finish.addEventListener("click", () => {
    result()  // after click equals out result
    inputFieldReset = true // after set field need to reset 
    operation = null; // operation reset

})
//added point after 0 or another nubmer
point.addEventListener("click", () => {
    if (inputFieldReset) resetInput() /* added not my code , checked if  need to reset field, do it*/
    if (outputField.textContent === '') outputField.textContent = '0' // if field is empty add zero
    if (outputField.textContent.includes(".")) { //checked include field ".", becase i dont need two point example 2.. 
        return false
    } else { outputField.textContent += "." } // if all good add "." after number


})
