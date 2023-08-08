const apiKey = "105931b1db025af71876cb158037ed10";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&";
const inputCity = document.querySelector(".search-container input");
const weatherImage = document.querySelector(".weather-details img");

async function getData(city) {
  try {
    const res = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    const data = await res.json();
    console.log(data);
    const newDate = new Date();
    // const testDate = new Date().toLocaleDateString();
    const date =
      newDate.getMonth() +
      1 +
      "/" +
      newDate.getDate() +
      "/" +
      newDate.getFullYear();

    //  add the fetched data from api to the app fields
    document.querySelector(".date").innerHTML = date;
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temprature").innerHTML =
      Math.round(data.main.temp) + "  °C";
    document.querySelector(".low-temp ").innerHTML =
      "Low   " + Math.round(data.main.temp_min) + "  °C";
    document.querySelector(".high-temp ").innerHTML =
      "High  " + Math.round(data.main.temp_max) + "  °C";

    document.querySelector(".feel-like").innerHTML =
      "Feels like:    " + Math.round(data.main.feels_like) + "  °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "  %";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed * 1.609344) + " km/h ";

    //    if the sky is any situation we asign that weather icon
    if (data.weather[0].main == "Clouds") {
      weatherImage.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherImage.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherImage.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Rain") {
      weatherImage.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherImage.src = "images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherImage.src = "images/mist.png";
    }
    document.querySelector(".invalidName").style.display = "none";
    document.querySelector(".weather-details").style.display = "flex";
    document.querySelector(".extra-info-container").style.display = "flex";
  } catch (error) {
    document.querySelector(".invalidName").style.display = "block";
    document.querySelector(".weather-details").style.display = "none";
    document.querySelector(".extra-info-container").style.display = "none";
  }
}

// key press envent listener
inputCity.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getData(inputCity.value);
    inputCity.value = "";
  }
});
