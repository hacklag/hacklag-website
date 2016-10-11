const Hostname = process.env.HOSTNAME;
const Username = process.env.USERNAME;
const ENV = process.env.NODE_ENV || 'development';
const Rsync = require('rsync');
let path = 'hacklag-dev';

if (ENV === 'production') {
  path = 'hacklag-prod';
}

if (typeof Hostname !== 'undefined' && Hostname &&
    typeof Username !== 'undefined' && Username) {
  const rsync = new Rsync()
    .shell('ssh')
    .flags('avz')
    .recursive(true)
    .progress(true)
    .source('build/')
    .destination(`${Username}@${Hostname}:${path}`);

  rsync.execute((error) => {
    if (error !== null) {
      console.log(error);
    }
  });
} else {
  throw new Error('Error 1: Check env variables configuration!');
}
