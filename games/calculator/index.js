const container = document.querySelector(".container");
const display = document.querySelector(".values");
let hariu = 0;
let prev = 0;
const symbols = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "*",
  "/",
  "+",
  "-",
  ".",
  "x",
  "AC",
  "=",
];
symbols.map((element) => {
  const button = document.createElement("button");
  button.textContent = element;
  container.appendChild(button);
  button.addEventListener("click", function () {
    if (element === "AC") {
      display.textContent = "";
    } else if (element === "x") {
      const newStr = display.textContent.slice(
        0,
        display.textContent.length - 1,
      );
      display.textContent = newStr;
    } else if (element === "=") {
      calculate();
    } else {
      display.textContent = display.textContent + element;
    }
  });
});
function calculate() {
  const values = display.textContent.match(/(\d+\.?\d*|[\+\-\*\/])/g);
  let i = 0;
  while (i < values.length) {
    if (values[i] === "*" || values[i] === "/") {
      if (values[i] === "*") {
        hariu = values[i - 1] * values[i + 1];
        values.splice(i - 1, 3, hariu);
      } else if (values[i] === "/") {
        hariu = values[i - 1] / values[i + 1];
        values.splice(i - 1, 3, hariu);
        i--;
      }
    } else {
      i++;
    }
  }
  let j = 0;
  while (j < values.length) {
    if (values[j] === "+" || values[j] === "-") {
      if (values[j] === "+") {
        hariu = Number(values[j - 1]) + Number(values[j + 1]);
        values.splice(j - 1, 3, hariu);
      } else if (values[j] === "-") {
        hariu = values[j - 1] - values[j + 1];
        values.splice(j - 1, 3, hariu);
        j--;
      }
    } else {
      j++;
    }
  }
  display.textContent = hariu;
}
