const userPosition = document.getElementById("user-position")
const userCurrentWeather = document.getElementById("user-current-weather")
const API_KEY = "b56fa82829a4d900b175386b8241a0aa"

const allowGeolocation = (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const currentCountry = data.name
        const currentWeather = data.weather[0].main
        const currentTemp = data.main.temp

        userPosition.innerText = `${currentCountry}, ${currentWeather}` 
        userCurrentWeather.innerText = `${currentTemp}°C` 

    })
    .catch(console.error)
}

const denyGeolocation = () => {
    userPosition.innerText = "Cannot find your location."
}

navigator.geolocation.getCurrentPosition(allowGeolocation, denyGeolocation)
