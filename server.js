const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required.' });
    }

    const user = { id: Date.now(), username, email };
    res.status(200).json({ message: 'User created successfully.', user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

