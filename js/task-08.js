const form = document.querySelector(".login-form");
console.log(form);

form.addEventListener("submit", onSearch);



function onSearch(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if(email.value === "" || password.value === ""){
    return alert('всі поля повинні бути заповнені');
  }

  const obj = {
    Email: email.value,
    Password: password.value
  }

  console.log(obj);
  
  event.currentTarget.reset();
}

  // if(email.value.length > 0){
  // }if(password.value.length > 0){
  //   console.log(elements)
  // }
  // else{
  //   alert('всі поля повинні бути заповнені')
  // }