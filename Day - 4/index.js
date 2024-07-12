
const express = require('express');
const app = express();
const port = 3000; // Port number, e.g., 3000

// Define a basic route
app.get('/', (req, res) => {
  res.send("Hello, Welcome to our first server");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
