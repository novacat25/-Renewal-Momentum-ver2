const toDoForm = document.getElementById("todo-form")
const toDoText = document.getElementById("todo-text")
const todoList = document.getElementById("todo-list")

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

const handleSubmitToDo = (event) => {
    event.preventDefault()
    paintToDo(toDoText.value)
    toDoText.value = ""
}

toDoForm.addEventListener("submit", handleSubmitToDo)