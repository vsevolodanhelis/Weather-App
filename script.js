const apiKey = "9987e5a1d395b48c58dcf6ac839b43dc";
let isCelsius = true;

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    }
});

document.getElementById("unitToggle").addEventListener("click", () => {
    isCelsius = !isCelsius;
    const unitButton = document.getElementById("unitToggle");
    unitButton.textContent = isCelsius ? "°C" : "°F";
    const city = document.getElementById("cityInput").value;
    if (city) {
        fetchWeather(city);
    }
});

document.getElementById("expandBtn").addEventListener("click", () => {
    const moreInfo = document.getElementById("moreInfo");
    moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
});

function fetchWeather(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${isCelsius ? "metric" : "imperial"}`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                // Show the weather information
                document.getElementById("weatherInfo").style.display = "block";
                document.getElementById("unitToggle").style.display = "block"; // Show unit toggle
                document.getElementById("weatherInfo").innerHTML = `
                    <div class="weather-title">${data.name}</div>
                    <div class="weather-icon"><img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather Icon" /></div>
                    <div class="weather-temp">${data.main.temp}°${isCelsius ? 'C' : 'F'}</div>
                    <div class="weather-description">${data.weather[0].description}</div>
                    <button id="expandBtn">More Info</button>
                    <div id="moreInfo" class="more-info" style="display: none;">
                        <p id="humidity">💧 Humidity: ${data.main.humidity}%</p>
                        <p id="windSpeed">💨 Wind Speed: ${data.wind.speed} m/s</p>
                        <p id="pressure">📏 Pressure: ${data.main.pressure} hPa</p>
                        <p id="feelsLike">🧳 Feels Like: ${data.main.feels_like}°${isCelsius ? 'C' : 'F'}</p>
                        <p id="sunrise">🌅 Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
                        <p id="sunset">🌇 Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
                    </div>
                `;

                // Reattach the event listener to the expand button after updating HTML content
                document.getElementById("expandBtn").addEventListener("click", () => {
                    const moreInfo = document.getElementById("moreInfo");
                    moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
                });
            } else {
                alert("City not found!");
            }
        })
        .catch(() => alert("Error fetching weather data."));
}
