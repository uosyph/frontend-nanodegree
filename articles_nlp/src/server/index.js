import { config } from 'dotenv';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import analyze from './analyze.js';

config();
const api_key = process.env.API_KEY;

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
});

app.post('/', async (req, res) => {
    const url = req.body.link;
    let data = await analyze(api_key, url);
    res.send(data);
});

const port = 3000;

app.listen(port, function () {
    console.log(`Server is listing on port: ${port}`);
});
