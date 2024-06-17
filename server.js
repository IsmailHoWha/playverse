const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware to parse JSON and URL-encoded bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory storage for simplicity; use a database in production
let nextUserId = 1;
const users = [];

// Handle POST request to /signup
app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;

    // Example: Validate input (e.g., check if username is unique)
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).send('Username already taken.');
    }

    // Example: Store user in "database"
    const newUser = {
        id: nextUserId++,
        username,
        email,
        password, // Ideally hashed, use bcrypt or similar
    };
    users.push(newUser);

    // Return success message or JSON response with user details
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
