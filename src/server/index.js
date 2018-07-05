const http = require('http');

var express = require('express');

var app = express();

var Router = require('express-promise-router');

var router = Router();

router.get('/', (req, res, next) => {
    res.send('home!');
});

router.get('/version', (req, res, next) => {
    res.send('1.0.0');
});

app.use(router);

module.exports = http.createServer(app);