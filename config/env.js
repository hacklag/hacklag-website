// Grab NODE_ENV and REACT_APP_* environment variables and prepare them to be
 // injected into the application via DefinePlugin in Webpack configuration.

const REACT_APP = /^REACT_APP_/i;
const NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');

module.exports = Object
  .keys(process.env)
  .filter(key => REACT_APP.test(key))
  .reduce((env, key) => Object.assign({}, env, {
    [`process.env.${key}`]: JSON.stringify(process.env[key]),
  }), {
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
      HACKLAG_SYNCANO_API_KEY: JSON.stringify(process.env.HACKLAG_SYNCANO_API_KEY),
      HACKLAG_SYNCANO_USER_KEY: JSON.stringify(process.env.HACKLAG_SYNCANO_USER_KEY),
    },
  });
