let currentTime = new Date();
let hour = currentTime.getHours();
let minutes = currentTime.getMinutes();
let day = currentTime.getDay();
let days = [
  "Sunday",
  "Monday",
  "Thuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

if (hour < 10) {
  hour = "0" + hour;
} else {
  hour = hour;
}

if (minutes < 10) {
  minutes = "0" + minutes;
} else {
  minutes = minutes;
}
timeDisplay = document.querySelector(".current-time");
timeDisplay.innerHTML = `${days[day]}, ${hour}: ${minutes}`;

function showTemperature(response) {
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  console.log(temperature);
  let h2 = document.querySelector("h2");
  h2.innerHTML = city;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${temperature} °C`;
}

let apiKey = "09d782b670469e485d317871e7a35468";
let units = "metric";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector(".city-search");
  let city = document.querySelector(`#city`);
  city.innerHTML = cityInput.value;
  let url = `${apiUrl}${cityInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(url).then(showTemperature);
}
let searchForCity = document.querySelector(`#search-engine`);
searchForCity.addEventListener("submit", showCity);

function showWeatherCurrentLocation(response) {
  let h2 = document.querySelector("h2");
  h2.innerHTML = response.data.name;
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  h1.innerHTML = `${temperature}° C`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeatherCurrentLocation);
}

function getLocation() {
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

let currentLocation = document.querySelector(`.currentLocation`);
currentLocation.addEventListener("click", getLocation);

function changeToFahrenheit(event) {
  event.preventDefault;
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = `66`;
}

let fahrenheitUnit = document.querySelector(`#fahrenheit-unit`);
fahrenheitUnit.addEventListener("click", changeToFahrenheit);

function changeToCelsius(event) {
  event.preventDefault;
  let temperature = document.querySelector(".temperature");
  temperature.innerHTML = "18";
}

let celsiusUnit = document.querySelector(`#celsius-unit`);
celsiusUnit.addEventListener("click", changeToCelsius);
