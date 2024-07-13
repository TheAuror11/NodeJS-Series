// Setting The Server
const express = require('express');
const app = express();
const port = 3000;

//MiddleWare 
app.use(express.json());

// GET request
app.get('/users', (req, res) => {
    res.send('Retrieve a list of users');
});

// POST request
app.post('/users', (req, res) => {
    res.send('Create a new user');
});

// PUT request
app.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

// DELETE request
app.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});

// PATCH request
app.patch('/users/:id', (req, res) => {
    res.send(`Partially update user with ID ${req.params.id}`);
});

// Query parameters
app.get('/search', (req, res) => {
    const query = req.query.q;
    res.send(`Search results for: ${query}`);
});

// Variable route
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID is ${userId}`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
