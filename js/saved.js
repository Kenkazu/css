fetch("php/get_cities.php")
  .then(res => res.json())
  .then(data => {
    let html = "<ul>";
    data.forEach(city => {
      html += `<li>${city.city_name} 
        <button onclick="deleteCity(${city.id})">Delete</button></li>`;
    });
    html += "</ul>";
    document.getElementById("savedCities").innerHTML = html;
  });

function deleteCity(id) {
  fetch("php/delete_city.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id })
  }).then(() => location.reload());
}