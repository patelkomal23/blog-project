const bodyParser = require('body-parser');
const express = require('express');
require('dotenv').config();
const app = express();
const port = 8081
const db = require('./configs/db');
db;
app.set('view engin', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

app.listen(port, (err) => {
    if (!err) {
        console.log("server start");
        console.log("http://localhost:" + port);
    }

})
