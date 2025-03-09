const toDoForm = document.getElementById("todo-form")
const toDoText = document.getElementById("todo-text")
const todoList = document.getElementById("todo-list")

const paintToDo = (newToDo) => {
    const newToDoItem = document.createElement("li")
    const spanText = document.createElement("span")
    newToDoItem.appendChild(spanText)
    spanText.innerText = newToDo
    todoList.appendChild(newToDoItem)
}

const handleSubmitToDo = (event) => {
    event.preventDefault()
    paintToDo(toDoText.value)
    toDoText.value = ""
}

toDoForm.addEventListener("submit", handleSubmitToDo)