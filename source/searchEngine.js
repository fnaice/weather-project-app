//let completeDate = document.querySelector("#full-date");
let completeDate = new Date();
let apiKey = `597c40c39084687093b091cd48b366f8`;

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thrusday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weekDay = days[completeDate.getDay()];
let month = months[completeDate.getMonth()];
let date = completeDate.getDate();
let year = completeDate.getFullYear();
let fullHour = completeDate.getHours();
let min = completeDate.getMinutes();
if (min < 10) {
  min = `0${min}`;
}

let day = document.querySelector("#week-day");
day.innerHTML = `${weekDay}`;
let fullDay = document.querySelector("#full-day");
fullDay.innerHTML = `${date} ${month} ${year}`;
let hour = document.querySelector("#hour");
hour.innerHTML = `${fullHour}:${min}`;

function changeCity(event) {
  event.preventDefault();
  let cityInputHeading = document.querySelector("#search-city");
  let h1 = document.querySelector("h1");
  if (cityInputHeading.value) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInputHeading.value}&appid=${apiKey}&units=metric`;
    //console.log(apiUrl);
    axios.get(apiUrl).then(collectDataTemp);

    h1.innerHTML = `${cityInputHeading.value.toUpperCase()}`;
  } else {
    alert(`🔍 Please, enter a city`);
  }
}
let cityInput = document.querySelector("#city-input");
cityInput.addEventListener("submit", changeCity);

function collectDataTemp(response) {
  //console.log(response);
  let actualTemp = document.querySelector("#temp-real");
  actualTemp.innerHTML = Math.round(response.data.main.temp);
}
function getLocation() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(coordinates) {
  let latitude = coordinates.coords.latitude;
  let longitude = coordinates.coords.longitude;

  updateCityTemp(latitude, longitude);
  updateCityName(latitude, longitude);
}
function changeCityName(names) {
  let gpsName = names.data[0].name.toUpperCase();
  document.querySelector("h1").innerHTML = `${gpsName}`;
}
function updateCityName(latitude, longitude) {
  let cityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=5&appid=${apiKey}`;
  axios.get(cityUrl).then(changeCityName);
}
function updateCityTemp(latitude, longitude) {
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(collectDataTemp);
}
let currentLocation = document.querySelector("#location");
currentLocation.addEventListener("click", getLocation);

function changeTemp(event) {
  event.preventDefault();
  let actualTemp = document.querySelector("#temp-real");

  let newTempFarenheit = (11 * 9) / 5 + 32;
  actualTemp.innerHTML = `${newTempFarenheit}`;
}
let newTemp = document.querySelector("#temp-fahrenheit");
newTemp.addEventListener("click", changeTemp);

function reloadTemp(event) {
  event.preventDefault();
  let temp = document.querySelector("#temp-real");

  temp.innerHTML = "11";
}
let loadTemp = document.querySelector("#temp-celsius");
loadTemp.addEventListener("click", reloadTemp);
