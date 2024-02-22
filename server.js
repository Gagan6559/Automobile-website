const express = require('express');
const app = express();
const port = 80;

// Serve static files from the 'static' directory
app.use(express.static('static'));

// Define a route for index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// Set the correct content type for CSS files
app.get('/static/index.css', function (req, res) {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(__dirname + '/static/index.css');
});

// Set the correct content type for image files
app.get('/static/images/:imageName', function (req, res) {
    const imageName = req.params.imageName;
    res.setHeader('Content-Type', 'image/jpeg'); // Adjust content type as per your image type
    res.sendFile(__dirname + '/static/images/' + imageName);
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
