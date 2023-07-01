const title =document.querySelector(".hello:first-child h1");

function handleTitleClick(){
    if(title.style.color=="blue"){
        title.style.color="pink"
    }
    else {
        title.style.color="blue"
    }

}



title.addEventListener("click",handleTitleClick);


