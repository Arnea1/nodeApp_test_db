const express = require('express');

const router = express.Router();

const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => { console.log("PORT 열림") });

app.get('/', (req, res) =>
{
    res.send("get request");
});