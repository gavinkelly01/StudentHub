<?php
session_start();

// Database credentials
$servername = "localhost";
$username = "root";
$password = "Hello100";
$dbname = "StudentHubDB";

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Check CSRF token
  if (!isset($_POST['token']) || !hash_equals($_SESSION['token'], $_POST['token'])) {
    die("Invalid CSRF token");
  }

  // Create a connection
  $conn = new mysqli($servername, $username, $password, $dbname);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . htmlspecialchars($conn->connect_error));
  }

  // Prepare and bind
  $stmt = $conn->prepare("INSERT INTO contact_responses (first_name, last_name, country, subject) VALUES (?, ?, ?, ?)");
  if ($stmt === false) {
    die("Prepare failed: " . htmlspecialchars($conn->error));
  }
  $stmt->bind_param("ssss", $first_name, $last_name, $country, $subject);

  // Retrieve and validate input data
  $first_name = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING);
  $last_name = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
  $country = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_STRING);
  $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);

  // Execute the statement
  if ($stmt->execute()) {
    echo "Contact form submitted successfully!";
  } else {
    echo "Error: " . htmlspecialchars($stmt->error);
  }

  // Close the statement and connection
  $stmt->close();
  $conn->close();
} else {
  echo "Error: Form data not submitted.";
}
?>
