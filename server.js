const express = require('express');
const robot = require('robotjs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to handle key presses
app.post('/keypress', (req, res) => {
    const { key } = req.body;
    console.log('Key pressed:', key);

    // Simulate key press on the server
    simulateKeyPress(key);

    res.sendStatus(200);
});

// Function to simulate key press
function simulateKeyPress(key) {
    // Simulate key press based on the received key
    robot.keyTap(key.toLowerCase());
}

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
