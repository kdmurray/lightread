//
// Pull the current value of the APP_ENV environment variable
// or default to 'dv' (development) if the variable is not found.
const env = process.env.APP_ENV || 'dv';

//
// Import the common configuration values
const commonConfig = require('./common');

//
// Import the configuration for the current environment
const envConfig = require(`./env-${env}`);

//
// Configuration ordering matters in assignment statement. Later values
// will override earlier ones. This ordering will allow environment-specific
// overrides of common configuration values.
module.exports = Object.freeze(Object.assign({}, commonConfig, envConfig));