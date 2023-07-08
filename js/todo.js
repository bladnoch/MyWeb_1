
/**
 * todo.js: display todo list on the screen
 * @author DoungukKim
 * @since 7/9/2023
 * @version v0.0.1
 */

const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");



function handleToDoSubmit(){
    // event.stopImmediatePropagation();
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    paintTodo(newTodo);
}

function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}


toDoForm.addEventListener("submit",handleToDoSubmit);
