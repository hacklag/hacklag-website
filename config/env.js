// Grab NODE_ENV and HACKLAG_* environment variables and prepare them to be
 // injected into the application via DefinePlugin in Webpack configuration.

const HACKLAG = /^HACKLAG_/i;
const NODE_ENV = JSON.stringify(process.env.NODE_ENV || 'development');
const ENV = JSON.parse(NODE_ENV.toUpperCase());

module.exports = Object
  .keys(process.env)
  .filter(key => HACKLAG.test(key))
  .reduce((env, key) => Object.assign({}, env, {
    [`process.env.${key}`]: JSON.stringify(process.env[key]),
  }), {
    'process.env': {
      NODE_ENV,
      HACKLAG_SYNCANO_API_KEY: JSON.stringify(process.env[`HACKLAG_${ENV}_SYNCANO_API_KEY`]),
      HACKLAG_SYNCANO_USER_KEY: JSON.stringify(process.env[`HACKLAG_${ENV}_SYNCANO_USER_KEY`]),
      HACKLAG_SYNCANO_INSTANCE_NAME: JSON.stringify(process.env[`HACKLAG_${ENV}_SYNCANO_INSTANCE_NAME`]),
      HACKLAG_PIXEL_WRITE_KEY: JSON.stringify(process.env[`HACKLAG_${ENV}_PIXEL_WRITE_KEY`]),
      HACKLAG_GOOGLE_WRITE_KEY: JSON.stringify(process.env[`HACKLAG_${ENV}_GOOGLE_WRITE_KEY`]),
      HACKLAG_DRIFT_WRITE_KEY: JSON.stringify(process.env[`HACKLAG_${ENV}_DRIFT_WRITE_KEY`]),
    },
  });
