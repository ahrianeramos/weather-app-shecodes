
// Display value of entered city
function enterCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#search-city");
  let p = document.querySelector("#location");
  p.innerHTML = `${cityInput.value}`;
  p.innerHTML.trim();
  p.innerHTML[0].toUpperCase;
}

let form = document.querySelector("#search-city");
form.addEventListener("submit", enterCity);

// Display temperature of entered city
function displayTemp(response) {
  let city = response.data.name;
  let cityOutput = document.querySelector("#enter-city");
  cityOutput.innerHTML = city;
  let temperature = Math.round(response.data.main.temp);
  let tempOutput = document.querySelector("#city-temp");
  tempOutput.innerHTML = temperature;
}

function showTemp(event) {
  event.preventDefault();
  let city = document.querySelector("#search-city");
  let apiKey = "d181817faaf7ac4148d91ac2cdf0c65a";
  let apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric`;
  let apiUrl = `${apiCall}&appid=${apiKey}`;
  axios.get(apiUrl).then(displayTemp);
}


let formTemp = document.querySelector("#search-city");
formTemp.addEventListener("submit", showTemp);