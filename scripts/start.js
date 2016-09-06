/* eslint consistent-return:0 */
/* eslint-disable no-console */
const express = require('express');
const chalk = require('chalk');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./utils/serverMiddleware');
const resolve = require('path').resolve;
const app = express();

// get the intended port number, use port 3000 if not provided
const port = argv.port || process.env.PORT || 3000;

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// Start your app.
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  // process.stdout.write('\x1bc');
  // console.log(chalk.cyan('Starting the development server...'));
  console.log();
});
