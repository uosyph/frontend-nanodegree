// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server.
const port = 3000;

// Spin up the server
const server = app.listen(port, () => {
    console.log(`Server is listing on port: ${port}`);
});

// GET route that returns the projectData
app.get('/all', (req, res) => {
    res.send(projectData);
});

// POST route that adds incoming data to projectData
app.post('/add', (req, res) => {
    projectData = req.body;
    res.send(projectData);
});
