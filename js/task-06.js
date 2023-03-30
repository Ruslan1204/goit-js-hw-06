const input = document.querySelector("#validation-input");
const style = document.querySelector("style");


input.addEventListener("input", onInput);
input.addEventListener("blur", onInputBlur);


function onInput(event) {
    input.textContent = event.currentTarget.value;
  }


function onInputBlur() {
    if (input.textContent.length !== 6) {
        input.classList.add("invalid")
        input.classList.remove('valid')
      }
      if (input.textContent.length === 6) {
        input.classList.remove('invalid')
        input.classList.add("valid")
      }
}







