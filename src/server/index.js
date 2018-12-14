const http = require('http');
const express = require('express');
const routes = require('./routes');

var app = express();

app.use(routes);

module.exports = http.createServer(app);