const loginForm = document.getElementById("login-form")
const loginInput = document.getElementById("login-input")

const onLoginSubmit = (event) => {
    event.preventDefault()
    const username = loginInput.value
    console.log("event", event)
    console.log("Hello " + username)
}

loginForm.addEventListener("submit", onLoginSubmit)