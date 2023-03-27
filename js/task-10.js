const elm = document.querySelector("#controls");
console.log(elm);

const btn = document.querySelector("[data-create]");
console.log(btn);

const button = document.querySelector("[data-destroy]");
console.log(button);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount){
  
}