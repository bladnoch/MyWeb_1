const title =document.querySelector(".hello:first-child h1");


function handleTitleClick(){
    if(title.style.color=="blue"){
        title.style.color="pink"
    }
    else {
        title.style.color="blue"
    }

}

function handleMouseEnter(){
    title.innerText="yes mouse";
}

function handleMouseLeave(){
    title.innerText="no mouse";
}
title.addEventListener("click",handleTitleClick);
title.addEventListener(("mouseenter"),handleMouseEnter);
title.addEventListener("mouseleave",handleMouseLeave);

