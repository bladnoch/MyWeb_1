
const loginInput= document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form button");
const loginForm=document.querySelector("#login-form")

function onLogSubmit(event){
    event.preventDefault();
    console.log(loginInput.value);
}

loginForm.addEventListener("submit",onLogSubmit);

