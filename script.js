<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to Playverse</h1>
        <nav>
            <ul>
                <li><a href="#" id="homeBtn">Home</a></li>
                <li><a href="#" id="gamesBtn">Games</a></li>
                <li><a href="#" id="createBtn">Create</a></li>
                <li><a href="#" id="aboutBtn">About</a></li>
                <li><a href="#" id="contactBtn">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <!-- Content sections -->
    </main>

    <footer>
        <p>&copy; 2024 Playverse. All rights reserved.</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
// script.js

document.addEventListener('DOMContentLoaded', function() {
    const homeBtn = document.getElementById('homeBtn');
    const gamesBtn = document.getElementById('gamesBtn');
    const createBtn = document.getElementById('createBtn');
    const aboutBtn = document.getElementById('aboutBtn');
    const contactBtn = document.getElementById('contactBtn');

    // Example: Handle click on Home button
    homeBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked on Home button');
        // Implement logic to show home content or navigate to home page
    });

    // Example: Handle click on Games button
    gamesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked on Games button');
        // Implement logic to show games content or navigate to games page
    });

    // Example: Handle click on Create button
    createBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked on Create button');
        // Implement logic to show create content or navigate to create page
    });

    // Example: Handle click on About button
    aboutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked on About button');
        // Implement logic to show about content or navigate to about page
    });

    // Example: Handle click on Contact button
    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        console.log('Clicked on Contact button');
        // Implement logic to show contact content or navigate to contact page
    });
});

// Example function to play a game
function playGame(gameId) {
    // Implement logic to launch the game based on gameId
    console.log(`Playing game with ID: ${gameId}`);
    // Example: Redirect to game page or start game session
    // window.location.href = `/play/${gameId}`; // Replace with actual game URL
}
