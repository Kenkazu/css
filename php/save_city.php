php
<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the raw POST data
  $json_data = file_get_contents('php://input');
  // Decode the JSON data
  $data = json_decode($json_data, true);

  if (isset($data['city'])) {
    $city = $data['city'];
    // Process the city data (e.g., save to database)
    // ...
    echo json_encode(["status" => "success", "message" => "City saved!"]);
  } else {
    http_response_code(400); // Bad Request
    echo json_encode(["status" => "error", "message" => "City data missing."]);
  }
} else {
  http_response_code(405); // Method Not Allowed
  header('Allow: POST');
  echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
}
?>