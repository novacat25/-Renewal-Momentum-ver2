const toDoForm = document.getElementById("todo-form")
const toDoText = document.getElementById("todo-text")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todo"
let toDos = []

const deleteToDo = (event) => {
    poppedToDos = toDos.filter((todo) => todo.id != event.target.parentNode.id)
    toDos = poppedToDos
    localStorage.setItem(TODOS_KEY, JSON.stringify(poppedToDos))
    event.target.parentNode.remove()
}

const paintToDo = (newToDo) => {
    const newToDoItem = document.createElement("li")
    const spanText = document.createElement("span")
    const deleteButton = document.createElement("button")

    newToDoItem.className="todo-list-item"
    newToDoItem.id = newToDo.id
    deleteButton.className = "todo-delete-button"
    deleteButton.innerText = "❌"
    deleteButton.addEventListener("click", deleteToDo)

    newToDoItem.appendChild(spanText)
    newToDoItem.appendChild(deleteButton)

    spanText.innerText = newToDo.task
    todoList.appendChild(newToDoItem)
}

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const handleSubmitToDo = (event) => {
    event.preventDefault()
    const newToDo = toDoText.value
    const newToDoObject = {id: Date.now(), task: newToDo}
    toDos.push(newToDoObject)
    paintToDo(newToDoObject)
    toDoText.value = ""
    saveToDos()
}

const loadToDo = () => {
    const updatedLocalStorage = JSON.parse(localStorage.getItem(TODOS_KEY))
    if(updatedLocalStorage) toDos = updatedLocalStorage
    toDos.forEach(paintToDo)
}

loadToDo()

toDoForm.addEventListener("submit", handleSubmitToDo)