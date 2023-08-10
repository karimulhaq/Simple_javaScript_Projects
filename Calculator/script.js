const inputDisplay = document.querySelector(".inputDisplay");
const buttons = document.querySelectorAll("button");
const specialChar = ["%", "/", "+", "*", "-", "="];
let output = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) =>
    CalculateValue(e.target.dataset.value)
  );
});

const CalculateValue = (input_data) => {
  if (input_data === "=" && output !== "") {
    // note: eval () is a js funciton wich means evaluate or evaluate the expression so in here the output is exactly an expresion in form of string.
    output = eval(output);
  } else if (input_data === "AC") {
    output = "";
  } else if (input_data === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChar.includes(input_data)) {
      return;
    }
    output += input_data;
  }
  inputDisplay.value = output;
};
