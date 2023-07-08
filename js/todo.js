
/**
 * todo.js: display todo list on the screen
 * @author DoungukKim
 * @since 7/9/2023
 * @version v0.0.1
 */

const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");

const todos=[];


// save input value and call paintTodo() method to save input
function handleToDoSubmit(){
    // event.stopImmediatePropagation();
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value="";
    todos.push(newTodo);
    paintTodo(newTodo);
    saveTodos();
}

// delete todo list with x button
function deleteDodo(event){
    const li=event.target.parentElement;
    li.remove();

}

// add todo list on the screen
function paintTodo(newTodo){
    const li=document.createElement("li");
    const span=document.createElement("span");
    const button=document.createElement("button");

    span.innerText = newTodo;
    button.innerText="X";

    button.addEventListener("click",deleteDodo);
    li.appendChild(span);
    li.appendChild(button);

    toDoList.appendChild(li);
}

function saveTodos(){
    localStorage.setItem("todos",JSON.stringify(todos));
}

toDoForm.addEventListener("submit",handleToDoSubmit);
