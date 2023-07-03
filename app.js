
const loginInput= document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form button");
const loginForm=document.querySelector("#login-form");
const greeting =document.querySelector("#greeting");
const link =document.querySelector("a");

const HIDDEN_CLASSNAME="hidden";

function onLogSubmit(event){
    event.preventDefault();
    const username=loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText=`Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
function handleLinkClick(event){
    event.preventDefault();
}

loginForm.addEventListener("submit",onLogSubmit);
link.addEventListener("click",handleLinkClick);
