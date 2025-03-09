const toDoForm = document.getElementById("todo-form")
const toDoText = document.getElementById("todo-text")
const todoList = document.getElementById("todo-list")

const TODOS_KEY = "todo"
const toDos = JSON.parse(localStorage.getItem(TODOS_KEY)) || []

const deleteToDo = (event) => {
    event.target.parentNode.remove()
}

const paintToDo = (newToDo) => {
    const newToDoItem = document.createElement("li")
    const spanText = document.createElement("span")
    const deleteButton = document.createElement("button")

    deleteButton.className = "todo-delete-button"
    deleteButton.innerText = "❌"
    deleteButton.addEventListener("click", deleteToDo)

    newToDoItem.appendChild(spanText)
    newToDoItem.appendChild(deleteButton)

    spanText.innerText = newToDo
    todoList.appendChild(newToDoItem)
}

const loadToDo = () => {
    toDos.forEach(paintToDo)
}

const saveToDos = () => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

const handleSubmitToDo = (event) => {
    event.preventDefault()
    const newToDo = toDoText.value
    paintToDo(newToDo)
    toDos.push(newToDo)
    toDoText.value = ""
    saveToDos()
}

loadToDo()

toDoForm.addEventListener("submit", handleSubmitToDo)