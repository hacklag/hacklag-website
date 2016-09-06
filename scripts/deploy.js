var Hostname = process.env.HOSTNAME;
var Username = process.env.USERNAME;
var ENV = process.env.NODE_ENV || 'development';
var Rsync = require('rsync');
var Path = 'hacklag-dev';

if ( ENV === 'production' ){
  Path = 'hacklag-prod';
}

if ( typeof Hostname !== 'undefined' && Hostname &&
     typeof Username !== 'undefined' && Username){

  var rsync = new Rsync()
    .shell('ssh')
    .flags('avz')
    .recursive(true)
    .progress(true)
    .source('build/')
    .destination(`${Username}@${Hostname}:${Path}`);

  rsync.execute(function(error, code, cmd) {
      if ( error !== null ) {
        console.log(error);
      }
  });
} else {
  throw 'Error 1: Check env variables configuration!';
}
