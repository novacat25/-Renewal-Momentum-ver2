const clock = document.getElementById("clock")
const DELAY = 1000

const displayCurrentTime = () => {
    const newTime = new Date()

    const hour = newTime.getHours().toString().padStart(2,"0")
    const minute = newTime.getMinutes().toString().padStart(2,"0")
    const second = newTime.getSeconds().toString().padStart(2,"0")

    clock.innerText = `${hour}:${minute}:${second}`
}

window.addEventListener("load", displayCurrentTime)
setInterval(displayCurrentTime, DELAY)