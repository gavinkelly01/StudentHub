<?php
$servername = "localhost";
$username = "root";
$password = "Hello100";
$dbname = "StudentHubDB";


if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $conn = new mysqli($servername, $username, $password, $dbname);


  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }


  $stmt = $conn->prepare("INSERT INTO contact_responses (first_name, last_name, country, subject) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $first_name, $last_name, $country, $subject);


  $first_name = $_POST['firstname'];
  $last_name = $_POST['lastname'];
  $country = $_POST['country'];
  $subject = $_POST['subject'];


  if ($stmt->execute()) {
    echo "Contact form submitted successfully!";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();
} else {
  echo "Error: Form data not submitted.";
}
?>


