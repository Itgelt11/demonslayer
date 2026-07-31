const choose = document.querySelector(".choose");
const type = document.querySelector(".type");
const choose2 = document.querySelector(".choose2");
const convert = document.querySelector(".convert");
const outcome = document.querySelector(".outcome");
let hariu = 1;
type.addEventListener("input", function () {
  console.log(type.value);
});
choose.addEventListener("change", function () {
  console.log(choose.value);
});
choose2.addEventListener("change", function () {
  console.log(choose2.value);
});
convert.addEventListener("click", function () {
  if (choose.value === "celcius" && choose2.value === "celcius") {
    hariu = type.value + "°C";
  }
  if (choose.value === "celcius" && choose2.value === "farenheit") {
    hariu = hariu * type.value * 1.8 + 32 + "°F";
  }
  if (choose.value === "farenheit" && choose2.value === "celcius") {
    hariu = ((type.value - 32) * 5) / 9 + "°C";
  }
  if (choose.value === "farenheit" && choose2.value === "farenheit") {
    hariu = type.value + "°F";
  }
  outcome.textContent = hariu;
});
