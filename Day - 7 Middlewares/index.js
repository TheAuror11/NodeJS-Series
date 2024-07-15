// Application-level Middleware:
const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

// Router-level Middleware:
const router = express.Router();
router.use((req, res, next) => {
  console.log("Request URL:", req.originalUrl);
  next();
});

// Error-handling Middleware:
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Built-in Middleware:
app.use(express.json());
app.use(express.static("public"));

// Third-party Middleware:
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Example Usage
// const express = require('express');
// const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
