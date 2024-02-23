const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');


async function checkWeather(city){
    const api_key = "9bbde0cb5d81338bf0dc5ba12c3daa99";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    console.log("run");
    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;


    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/cloud.png?raw=true";
            break;
        case 'Clear':
            weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/clear.png?raw=true";
            break;
        case 'Rain':
            weather_img.src = "https://github.com/CodeTraversal/JavaScript-Projects/blob/main/Weather%20App/assets/rain.png?raw=true";
            break;
        case 'Mist':
            weather_img.src = "https://i.pinimg.com/564x/1e/c4/e8/1ec4e83f5d60afc434ac5dc8a9efcdf4.jpg";
            break;
        case 'Snow':
            weather_img.src = "https://static.vecteezy.com/system/resources/previews/007/488/951/original/light-snow-color-icon-winter-snowy-weather-cloud-and-snowflake-weather-forecast-isolated-illustration-vector.jpg";
            break;

    }

    console.log(weather_data);
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
});