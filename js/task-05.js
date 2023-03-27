const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");
console.log(input)
console.log(title)
input.addEventListener("input", onChange);

function onChange(event) {
  title.textContent = event.currentTarget.value;

  if(event.currentTarget.value === ""){
    title.textContent = 'Anonymous'
  }
}
