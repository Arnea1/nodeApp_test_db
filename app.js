const express = require('express');
const db = require('./database');

const app = express();
const port = 3000;

// middleware express
app.use(express.json());

//route
app.use('/', require('./routes'));

app.listen(port, () => { 
    console.log("PORT 열림");
    db.ConnectionPostgreSQL();
});