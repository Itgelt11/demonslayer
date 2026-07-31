const plus = document.getElementById("plus");
const count = document.getElementById("count");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
let number = 0;
plus.addEventListener("click", function(){
    number = number + 1;
count.textContent = number;
})
minus.addEventListener("click", function(){
    number = number - 1;
    count.textContent = number;
})
reset.addEventListener("click", function(){
    number = 0;
    count.textContent = number;
})