const weatherContainer =
    document.querySelector("#weather");

fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.0447&longitude=-114.0719&current_weather=true"
)
    .then(function (response) {

        return response.json();

    })
    .then(function (data) {

        weatherContainer.innerHTML = `
            <p>
                Temperature:
                ${data.current_weather.temperature}°C
            </p>

            <p>
                Wind Speed:
                ${data.current_weather.windspeed} km/h
            </p>

            <p>
                Weather Code:
                ${data.current_weather.weathercode}
            </p>
        `;

    })
    .catch(function () {

        weatherContainer.textContent =
            "Unable to load weather data.";

    });