// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Mock API endpoint for form submission
app.post('/submit_contact.php', (req, res) => {
  const { firstname, lastname, email, subject } = req.body;
  console.log('Form Data:', req.body); // Debugging: Log form data

  if (firstname && lastname && email && subject) {
    res.status(200).json({ message: 'Contact form submitted successfully!' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
