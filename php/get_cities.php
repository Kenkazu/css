<?php
$conn = new mysqli("localhost", "root", "", "weather_db");
$result = $conn->query("SELECT * FROM saved_cities");
$cities = [];
while ($row = $result->fetch_assoc()) {
  $cities[] = $row;
}
echo json_encode($cities);
?>