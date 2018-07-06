var PromiseRouter = require('express-promise-router');
var config        = require('../config')

var router = PromiseRouter();

//
// Create a route for the homepage
router.get('/', (req, res, next) => {
    res.send('home!');
});

//
// Create a route to return version information
router.get('/version', (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200);
    res.send(JSON.stringify({ version: config.version }));
});

module.exports = router;