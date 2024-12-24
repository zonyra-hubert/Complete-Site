

document.getElementById("weather-form").addEventListener("submit", async function (e) {
    e.preventDefault();

    const city = document.getElementById("city-input").value;
    const apiKey = '2b2292f8f5403670549abe2d7549af6d';  // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`City not found: ${city}`);
        }
        const data = await response.json();

        // Determine weather condition and apply corresponding CSS class
        const weatherCondition = data.weather[0].main.toLowerCase();
        const weatherDataDiv = document.querySelector(".weather-data");
        
        // Remove previous weather condition classes
        weatherDataDiv.classList.remove("cloudy", "sunny", "rainy", "snowy");

        // Add new class based on the current weather
        if (weatherCondition.includes("cloud")) {
            weatherDataDiv.classList.add("cloudy");
        } else if (weatherCondition.includes("clear")) {
            weatherDataDiv.classList.add("sunny");
        } else if (weatherCondition.includes("rain")) {
            weatherDataDiv.classList.add("rainy");
        } else if (weatherCondition.includes("snow")) {
            weatherDataDiv.classList.add("snowy");
        } else {
            weatherDataDiv.classList.add("default");  // Default fallback style
        }

        

        // Display the weather information
        const weatherInfo = `
            <h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;
        weatherDataDiv.innerHTML = weatherInfo;

    } catch (error) {
        console.error("Error:", error);
        document.querySelector(".weather-data").innerHTML = `<p>${error.message}</p>`;
    }
});

