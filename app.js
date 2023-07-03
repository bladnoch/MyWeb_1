
const loginInput= document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form button");
const loginForm=document.querySelector("#login-form")

const link =document.querySelector("a");

function onLogSubmit(event){
    event.preventDefault();
    console.log(event);
}
function handleLinkClick(event){
    event.preventDefault();

}

loginForm.addEventListener("submit",onLogSubmit);
link.addEventListener("click",handleLinkClick);
