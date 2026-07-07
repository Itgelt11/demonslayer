const noob = document.getElementById("player");
const button = document.getElementById("button");
const div = document.getElementById("div");
button.addEventListener("click", function(){
    console.log("hello");
    noob.textContent = "PRO PLAYER";
const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
})
