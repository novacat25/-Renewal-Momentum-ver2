const images = ["0.jpg", "1.jpg", "2.jpg"]

const randomIndex = Math.floor(Math.random() * images.length)
const randomImageDir = images[randomIndex]

document.body.style.background = `url(img/${randomImageDir})`
document.body.style.backgroundSize = "cover"
