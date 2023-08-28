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
