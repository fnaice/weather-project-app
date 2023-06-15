let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
    cityName: "Paris",
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
    cityName: "Tokyo",
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
    cityName: "Lisbon",
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
    cityName: "San Francisco",
  },
  oslo: {
    temp: -5,
    humidity: 20,
    cityName: "Oslo",
  },
};

let city = prompt("Enter a city");
city = city.toLowerCase();

let cityKeys = Object.keys(weather);
if (cityKeys.includes(city)) {
  let tempC = weather[city].temp;
  let tempF = tempC * 1.8 + 32;
  alert(
    "It is currently " +
      Math.round(tempC) +
      "°C (" +
      Math.round(tempF) +
      "°F) in " +
      weather[city].cityName +
      " with a humidity of " +
      weather[city].humidity +
      "%"
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+" +
      city
  );
}
