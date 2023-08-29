const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

const MAX_DIGITS = 20;

let currentInput = "";
let operator = "";
let prevInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;

    if (buttonText === "AC") {
      clearAll();
    } else if (buttonText === "C") {
      clear();
    } else if (buttonText === "=") {
      calculate();
    } else if (button.classList.contains("operator")) {
      handleOperator(buttonText);
    } else {
      appendDigit(buttonText);
    }
  });
});

function appendDigit(digit) {
  currentInput += digit;
  updateDisplay();
}

function handleOperator(op) {
  if (operator !== "") {
    calculate();
  }
  operator = op;
  prevInput = currentInput;
  currentInput = "";
}

function appendDigit(digit) {
  if (currentInput.length < MAX_DIGITS) {
    currentInput += digit;
    updateDisplay();
  }
}

function calculate() {
  if (prevInput === "" || currentInput === "") return;
  const prev = parseFloat(prevInput);
  const current = parseFloat(currentInput);
  let result;

  switch (operator) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = prev / current;
      break;
    case "%":
      result = prev % current;
      break;
  }

  if (result.toString().length <= MAX_DIGITS) {
    currentInput = result.toString();
  } else {
    currentInput = "Overflow";
  }

  operator = "";
  prevInput = "";
  updateDisplay();
}

function clear() {
  currentInput = "";
  updateDisplay();
}

function clearAll() {
  currentInput = "";
  operator = "";
  prevInput = "";
  updateDisplay();
