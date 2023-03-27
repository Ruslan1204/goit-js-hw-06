

const changeColor = document.querySelector(".change-color");
console.log(changeColor);

const color = document.querySelector(".color");
console.log(color);

changeColor.addEventListener("click", getRandomHexColor);

function getRandomHexColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

  color.textContent = document.body.style.backgroundColor

}
