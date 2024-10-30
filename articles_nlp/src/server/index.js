const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const { analyze } = require('./analyze');

dotenv.config();
const api_key = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render("index.html");
});

app.post('/analyze', async (req, res) => {
    const url = req.body.URI;
    const analysis = await analyze(api_key, url);
    const { code, msg, sample } = analysis;

    if (code === 212 || code === 100) {
        return res.send({ msg: msg, code: code });
    }

    return res.send({ sample: sample, code: code });
});

const port = 3030;

app.listen(port, function () {
    console.log(`Server is listening on port: ${port}`);
});
