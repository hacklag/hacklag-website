// Grab NODE_ENV and HACKLAG_* environment variables and prepare them to be
 // injected into the application via DefinePlugin in Webpack configuration.

const NODE_ENV = process.env.NODE_ENV || 'development';
const plugin = { ENV: JSON.stringify(NODE_ENV) };

const envVars = [
  'GOOGLE_MAPS_API_KEY',
  'SYNCANO_API_KEY',
  'SYNCANO_USER_KEY',
  'SYNCANO_INSTANCE_NAME',
  'SYNCANO_HACKLAG_LOGIC_INSTANCE_NAME',
  'PIXEL_WRITE_KEY',
  'GOOGLE_WRITE_KEY',
  'DRIFT_WRITE_KEY',
];

for (let i = 0; i < envVars.length; i++) {
  const name = envVars[i];
  const envName = `${NODE_ENV.toUpperCase()}_${name}`;

  plugin[name] = JSON.stringify(process.env[envName] || process.env[name] || '');
}

module.exports = Object.assign({}, {
  NODE_ENV: JSON.stringify(NODE_ENV),
  'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
}, plugin);
