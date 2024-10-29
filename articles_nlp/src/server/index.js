const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const api_key = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('dist/index.html'));
});

app.post('/analyze', async (req, res) => {
    const url = req.body.link;
    let data = await require('./analyze')(api_key, url);
    res.send(data);
});

const port = 3000;

app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`);
});
