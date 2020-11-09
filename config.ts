const enviornment = process.env.NODE_ENV || 'production';

// Getting the env's config file
const config = require(`./configs/${enviornment}/${enviornment}.config`);

// Getting the default config file
const defaultConfig = require('./configs/default.config');

// Returning that config file's default exports along with the default config file
export default { ...defaultConfig.default, ...config.default };
