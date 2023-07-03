
const loginInput= document.querySelector("#login-form input");
const loginButton= document.querySelector("#login-form button");


function onLogBtnClick(){
    const value=loginInput.value;
    console.log(value);
    // if(value===""){
    //     alert("please put id");
    // } else if(value.length>15){
    //     alert("your name is too long")
    // } else if(value.length<8){
    //     alert("your name is too short")
    // }

}

loginButton.addEventListener("click", onLogBtnClick);

