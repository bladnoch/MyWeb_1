const h1 =document.querySelector("div.hello:first-child h1");


function handleTitleClick(){
    if(h1.style.color=="blue"){
        h1.style.color="pink"
    }
    else {
        h1.style.color="blue"
    }

}

function handleMouseEnter(){
    h1.innerText="yes mouse";
}

function handleMouseLeave(){
    h1.innerText="no mouse";
}
function handleWindowResize(){
    document.body.style.backgroundColor="tomato";
}

function hadleWindowCopy(){
    alert("copied");
}

function hadleWindowOffline(){
    alert("no WI-FI");
}

function handleWindowOnline(){
    alert("yes wi-fi");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);

window.addEventListener("resize",handleWindowResize);
window.addEventListener("copy",hadleWindowCopy);
window.addEventListener("offline",hadleWindowOffline);
window.addEventListener("online",handleWindowOnline);
