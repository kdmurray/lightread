var PromiseRouter = require('express-promise-router');
var config        = require('../config')

var router = PromiseRouter();

//
// Create a route for the homepage
router.get('/', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.send('home!');
});

//
// Create a route for the login page
router.get('/login', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.send('Please enter your username and password...');
});

//
// Create a route for the user registration page
router.get('/register', (req, res, next) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200);
    res.send('Thanks for your interest! Please register for your account below...');
});

//
// Create a route to return version information
router.get('/version', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify({ version: config.version }));
});

module.exports = router;