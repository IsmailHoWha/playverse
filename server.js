const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for simplicity; use a database in production
let nextUserId = 1;
const users = [];

// Handle POST request to /signup
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    
    // Example: Validate input and process signup logic
    // Ensure the method processes the request correctly
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('Username already taken.');
    }

    const newUser = {
        id: nextUserId++,
        username,
        email,
        password, // Ideally hash the password
    };
    users.push(newUser);

    res.json({
        message: 'User created successfully.',
        user: {
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
        },
    });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
