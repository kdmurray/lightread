var server = require('./server');
var config = require('./config');

server.listen(config.port, () => {
    console.log(`Started on port ${server.address().port}`);
});