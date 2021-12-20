const todosForm = document.querySelector("#TodosForm");
const inputGoal = todosForm.querySelector("input");
const todosUL  = document.querySelector("#todos");
const TODOS_KEY = "todos";
let myDodos = []

function addNewTodo(event){
    event.preventDefault();
    const newTodo = inputGoal.value;
    inputGoal.value = "";
    
    const newTodoObj = {
        "id" : Date.now(),
        "text" : newTodo
    }

    myDodos.push(newTodoObj);
    // save to localStorage
    localStorage.setItem(TODOS_KEY,JSON.stringify(myDodos));

    // add li element into ul
    paintTodo(newTodoObj);
}

function paintTodo(newTodoObj){

    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button")
    button.addEventListener("click", deleteTodo);
    // button.innerText = 'x'
    span.innerText = newTodoObj.text;

    li.appendChild(button);    
    li.appendChild(span);
    todosUL.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    //delete from localstorage
    const changedTodos = myDodos.filter((item) =>{ return item.id != li.id});
    console.log(changedTodos);
    localStorage.setItem(TODOS_KEY,JSON.stringify(changedTodos));
    //delete from UL
    li.remove()

}

todosForm.addEventListener("submit", addNewTodo);

savedTodos = localStorage.getItem(TODOS_KEY)

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    myDodos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}