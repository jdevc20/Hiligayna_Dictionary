'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 1337;
const mongoDbConfig = require('./configurations/mongoDbConfig')
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World\n');
});

mongoDbConfig()

const dictionaryRoutes = require('./routes/dictionaryRoute')
app.use('/dictionary', dictionaryRoutes);

app.listen(port, function () {
    console.log('app listening on port ' + port);
});