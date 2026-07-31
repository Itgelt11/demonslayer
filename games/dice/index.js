const dice = document.querySelector(".dice");
const roll = document.querySelector(".roll");
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
const parent = document.querySelector(".parent");
let number = 0;
// const child = document.querySelector(".child");
roll.addEventListener("click", function(){
    number = number + 1;
    const random = Math.floor(Math.random() * 6 );
    dice.textContent = diceFaces[random];       
    const newDiv = document.createElement("div")
    newDiv.textContent ="Roll " + number + ": " + diceFaces[random];    
    newDiv.style.border = "1px solid black";
    newDiv.style.borderRadius = "5px";
    newDiv.style.padding = "10px";
    parent.appendChild(newDiv);
})