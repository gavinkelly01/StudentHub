<?php
session_start();

function submit_contact($pdo) {
  // Check if the form was submitted
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Temporarily bypass CSRF check for debugging
     if (!isset($_POST['token']) || !isset($_SESSION['token'])) {
         echo "Invalid CSRF token";
         return;
     }

     $postToken = $_POST['token'];
     $sessionToken = $_SESSION['token'];

     if (!hash_equals($sessionToken, $postToken)) {
         echo "Invalid CSRF token";
         return;
     }

    try {
      // Prepare and bind
      $stmt = $pdo->prepare("INSERT INTO contact_responses (first_name, last_name, email, subject) VALUES (:first_name, :last_name, :email, :subject)");

      // Retrieve and validate input data
      $first_name = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      $last_name = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
      $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
      $subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

      // Bind parameters
      $stmt->bindParam(':first_name', $first_name);
      $stmt->bindParam(':last_name', $last_name);
      $stmt->bindParam(':email', $email);
      $stmt->bindParam(':subject', $subject);

      // Execute the statement
      if ($stmt->execute()) {
        echo json_encode(["message" => "Contact form submitted successfully!"]);
      } else {
        echo json_encode(["message" => "Error: " . htmlspecialchars($stmt->errorInfo()[2])]);
      }
    } catch (PDOException $e) {
      echo json_encode(["message" => "Connection failed: " . htmlspecialchars($e->getMessage())]);
    }
  } else {
    echo json_encode(["message" => "Error: Form data not submitted."]);
  }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Database credentials
  $servername = "localhost";
  $username = "root";
  $password = "Hello100";
  $dbname = "StudentHubDB";

  try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    submit_contact($conn);

    // Close the connection
    $conn = null;
  } catch (PDOException $e) {
    echo json_encode(["message" => "Connection failed: " . htmlspecialchars($e->getMessage())]);
  }
}
?>
