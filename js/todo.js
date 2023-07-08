const toDoForm=document.getElementById("todo-form");
const toDoInput=toDoForm.querySelector("#todo-form input");
const toDoList=document.getElementById("todo-list");



function handleToDoSubmit(){
    event.preventDefault();
    const newTodo=toDoInput.value;
    console.log(toDoInput.value);
    toDoInput.value="";
}

toDoForm.addEventListener("submit",handleToDoSubmit);
