function searchWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "1fd335668e1047642ab4dbf9719c4184";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const html = `
        <h3>${data.name}</h3>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <button onclick="saveCity('${data.name}')">Save City</button>
      `;
      document.getElementById("weatherResult").innerHTML = html;
    })
    .catch(err => alert("City not found."));
}

function saveCity(city) {
  fetch("php/save_city.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ city })
  }).then(res => res.json())
    .then(data => {
      alert("City saved!");
    });
}