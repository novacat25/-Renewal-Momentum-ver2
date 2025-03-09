const images = ["0.jpg", "1.jpg", "2.jpg"]

const randomIndex = Math.floor(Math.random() * images.length)
const randomImageDir = images[randomIndex]

const bgImage = document.createElement("img")
bgImage.src = `img/${randomImageDir}`
document.body.appendChild(bgImage)
