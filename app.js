const loginForm = document.getElementById("login-form")
const loginInput = document.getElementById("login-input")
const greeting = document.getElementById("greeting")
const logoutButton = document.getElementById("log-out")

const HIDDEN_CLASS = "hidden"
const LOCALSTORAGE_KEY = "user"

const paintGreetings = (username) => {
    greeting.innerText = `Hello ${username}!`
    greeting.classList.remove(HIDDEN_CLASS)
    logoutButton.classList.remove(HIDDEN_CLASS)
}

const showLoginDisplay = () => {
    greeting.classList.add(HIDDEN_CLASS)
    logoutButton.classList.add(HIDDEN_CLASS)
    loginForm.classList.remove(HIDDEN_CLASS)
}

const updateLoginStatus = () => {
    const savedUserName = localStorage.getItem(LOCALSTORAGE_KEY)

    if(savedUserName) {
        paintGreetings(savedUserName)
        loginForm.classList.add(HIDDEN_CLASS)
    } else
        showLoginDisplay()
}

updateLoginStatus()

const onLoginSubmit = (event) => {
    event.preventDefault()
    const username = loginInput.value
    localStorage.setItem(LOCALSTORAGE_KEY, username)
    updateLoginStatus()
}

const onClickLogout = () => {
    localStorage.removeItem(LOCALSTORAGE_KEY)
    loginInput.value = ""
    updateLoginStatus()
}

loginForm.addEventListener("submit", onLoginSubmit)
logoutButton.addEventListener("click", onClickLogout)