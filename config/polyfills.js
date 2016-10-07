import 'babel-polyfill';

window.Promise = require('promise/lib/es6-extensions');

// fetch() polyfill for making API calls.
require('whatwg-fetch');
