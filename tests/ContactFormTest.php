<?php

use PHPUnit\Framework\TestCase;

class ContactFormTest extends TestCase
{
  protected $pdo;
  protected $stmt;

  protected function setUp(): void
  {
    // Mock the PDO and PDOStatement
    $this->pdo = $this->createMock(PDO::class);
    $this->stmt = $this->createMock(PDOStatement::class);

    // Setup the prepare method to return the mocked statement
    $this->pdo->method('prepare')->willReturn($this->stmt);

    // Start the session
    if (session_status() == PHP_SESSION_NONE) {
      session_start();
    }

    // Include the file containing the submit_contact function
    require_once 'C:Users/{Your path here}/IdeaProjects/StudentHub/submit_contact.php';
  }

  protected function tearDown(): void
  {
    // Clear global and session data
    $_SESSION = [];
    $_POST = [];
    $_SERVER = [];
  }

  private function simulatePostRequest(array $postData)
  {
    $_SERVER['REQUEST_METHOD'] = 'POST';
    foreach ($postData as $key => $value) {
      $_POST[$key] = $value;
    }
  }

  public function testSuccessfulFormSubmission()
  {
    // Mock PDOStatement execute method to return true (indicating success)
    $this->stmt->method('execute')->willReturn(true);

    // Mock valid CSRF token and form data
    $_SESSION['token'] = 'valid_token';
    $this->simulatePostRequest([
      'token' => 'valid_token',
      'firstname' => 'John',
      'lastname' => 'Doe',
      'email' => 'john.doe@gmail.com',
      'subject' => 'Test Subject'
    ]);

    // Capture the output of submit_contact function
    ob_start();
    submit_contact($this->pdo);
    $output = ob_get_clean();

    // Assert that the output contains the success message
    $this->assertStringContainsString('Contact form submitted successfully!', $output);

    // Print the output to debug
    echo $output;
  }

  public function testInvalidCsrfToken()
  {
    // Mock valid CSRF token in session and invalid token in POST data
    $_SESSION['token'] = 'valid_token';
    $this->simulatePostRequest([
      'token' => 'invalid_token',
      'firstname' => 'John',
      'lastname' => 'Doe',
      'email' => 'john.doe@gmail.com',
      'subject' => 'Test Subject'
    ]);

    // Capture the output of submit_contact function
    ob_start();
    submit_contact($this->pdo);
    $output = ob_get_clean();

    // Assert that the output contains the CSRF token error message
    $this->assertStringContainsString('Invalid CSRF token', $output);
  }
}

