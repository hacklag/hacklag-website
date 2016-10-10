// Find all bits in current directory
const req = require.context('./', true, /^\.\/.*\/index.js/);

// Export each bit
req.keys().forEach((modulePath) => {
  // Export name is based on bit directory
  const moduleName = modulePath.match(/\.\/(.*)\//)[1];

  // Export default module
  module.exports[moduleName] = req(modulePath).default;
});

// Export vendor bits
export { Link } from 'react-router';
