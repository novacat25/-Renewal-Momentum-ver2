const loginForm = document.getElementById("login-form")
const loginInput = document.getElementById("login-input")
const greeting = document.getElementById("greeting")
const logoutButton = document.getElementById("log-out")

const HIDDEN_CLASS = "hidden"

const updateLoginStatus = () => {
    const userName = localStorage.getItem("user")

    if(userName) {
        greeting.classList.remove(HIDDEN_CLASS)
        logoutButton.classList.remove(HIDDEN_CLASS)
        loginForm.classList.add(HIDDEN_CLASS)
        greeting.innerText = `Hello ${userName}!`
    } else {
        greeting.classList.add(HIDDEN_CLASS)
        logoutButton.classList.add(HIDDEN_CLASS)
        loginForm.classList.remove(HIDDEN_CLASS)
    }
}

updateLoginStatus()

const onLoginSubmit = (event) => {
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem("user", username)
    updateLoginStatus()
}

const onClickLogout = () => {
    localStorage.removeItem("user")
    loginInput.value = ""
    updateLoginStatus()
}

loginForm.addEventListener("submit", onLoginSubmit)
logoutButton.addEventListener("click", onClickLogout)