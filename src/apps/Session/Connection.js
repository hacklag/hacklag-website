import Syncano from 'syncano';

let instanceConfig = {
  apiKey: '5694b8d065f407d3561a92cffaf2e435abf845cf',
  instance: 'cool-sea-5877'
};

let connection = new Syncano(instanceConfig);

export default {
  Syncano,
  //Deferred: connection.Deferred,
  //D: connection.Deferred,

  get() {
    return connection;
  },

  set(_connection) {
    connection = _connection;
  },

  reset() {
    connection = new Syncano(instanceConfig);
    return connection;
  }
};
