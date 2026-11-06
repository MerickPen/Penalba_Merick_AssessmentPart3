const weatherContainer =
    document.querySelector("#weather");

function sanitizeOutput(value) {

    return String(value)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

}

fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=51.0447&longitude=-114.0719&current_weather=true"
)
    .then(function (response) {

        return response.json();

    })
    .then(function (data) {

        const temperature =
            sanitizeOutput(
                data.current_weather.temperature
            );

        const windSpeed =
            sanitizeOutput(
                data.current_weather.windspeed
            );

        const weatherCode =
            sanitizeOutput(
                data.current_weather.weathercode
            );

        weatherContainer.innerHTML = `
            <p>
                Temperature:
                ${temperature}°C
            </p>

            <p>
                Wind Speed:
                ${windSpeed} km/h
            </p>

            <p>
                Weather Code:
                ${weatherCode}
            </p>
        `;

    })
    .catch(function () {

        weatherContainer.textContent =
            "Unable to load weather data.";

    });