const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text')

console.log(input)
console.log(text)

input.addEventListener("input", onChange);

function onChange(event) {
    
    text.style.fontSize = event.currentTarget.value + "px";

}
