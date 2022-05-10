// node require
const express = require('express');

// user require ( initialize )
require('./app_env.js');

// user require ( module )
const db = require('./database');
const route = require('./routes');

// get express object
const app = express();

// set express middleware
app.use(express.json());

// set route
app.use('/', route);

// open port
app.listen(process.env.PORT, () => { 
    console.log("PORT 열림 : " + process.env.PORT);
    db.ConnectionPostgreSQL();
});