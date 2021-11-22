// fetch("https://api.github.com/repos/nodejs/node/issues?per_page=5", {
//   method: "GET", //GET is the default.
//   credentials: "same-origin", // include, *same-origin, omit
//   redirect: "follow", // manual, *follow, error
// })
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });
var apiKey = "76cd20c8e01161e513e19b0cb3d25fa7";

var queryURL =
  "http://api.openweathermap.org/data/2.5/weather?q=" +
  cityUser +
  "&appid=" +
  apiKey;

var requestUrl = "..."

const button = document.querySelector("#searchBtn");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
  setLocation();
  fetch(queryURL);
  console.log(queryURL);
});

function getApi() {
  fetch(requestUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      })
}

function setLocation() {
  var cityLocation = document.getElementById("city-select");
  localStorage.setItem("city", cityLocation.value);
  console.log(cityLocation.value);
}

const cityUser = localStorage.getItem("city")

mini project
$cityUser
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
