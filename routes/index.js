const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.end();
    //res.send("기본요청");
});

router.get('/test', (req, res) =>{
    res.end();
    //res.send("test요청");
});

module.exports = router;