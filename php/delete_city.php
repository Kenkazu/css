<?php
$conn = new mysqli("localhost", "root", "", "weather_db");
$data = json_decode(file_get_contents("php://input"));
$id = intval($data->id);
$conn->query("DELETE FROM saved_cities WHERE id = $id");
echo json_encode(["status" => "deleted"]);
?>