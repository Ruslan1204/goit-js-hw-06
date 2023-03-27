const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onSearch);

function onSearch(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if(email.value === "" || password.value === ""){
    return alert('всі поля повинні бути заповнені');
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}

  // if(email.value.length > 0){
  // }if(password.value.length > 0){
  //   console.log(elements)
  // }
  // else{
  //   alert('всі поля повинні бути заповнені')
  // }