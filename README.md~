# Installation

Project requires node 0.12.7 and npm 2.14.6. The best way to manage node versions
I found is [n](https://github.com/tj/n).

Installation.

    $ sudo npm install -g n
    $ n 0.12.7

Type `n` to prompt selection of an installed node.
Use the up / down arrow to navigate, and press enter or the right arrow to select, or ^C to cancel:

    $ n

      0.8.14
    ο 0.12.7
      0.9.6


Without proper node version everything tends to blow up :fire: !

With proper node:

    $ node --version
    v0.12.7

Install dependencies:

    npm install
    sudo npm install gulp -g

Start local dev version (available at https://localhost:8080/)

    npm start


# Social login

Social login requires proper configuration of env variables with newtork ids e.g:

    $ export FACEBOOK_ID='xx'
    $ export GOOGLE_ID='xx'
    $ export GITHUB_ID='xx'
    $ export OAUTH_PROXY_URL='xx'

or if you are using `fish` shell:

    $ set -g -x FACEBOOK_ID xx
    $ set -g -x GOOGLE_ID xx
    $ set -g -x GITHUB_ID xx
    $ set -g -x OAUTH_PROXY_URL xx


# Icons

We are using set of [Material Design Icons](http://materialdesignicons.com/).
Icons are attached as font in static assets `src/assets` so if you want to rebuild whole font just use npm command:

    $ npm run-script iconfont

and commit your changes.


# E2E Testing

We are using [nightwatchjs](http://nightwatchjs.org/) for e2e testing.
**nightwatchjs** requires few binary files which can be installed via proper NPM command:

    $ npm run-script e2e-setup

You'll also need to configure env variables for the tests to work locally:

    $ export NIGHTWATCH_EMAIL="xx"
    $ export NIGHTWATCH_PASSWORD="xx"

If you are ready just run dev server:

    $ npm start

and start testing:

    $ npm run-script e2e


If part of the tests fail for some reason, you can temporarily disable them by `--skiptags` argument. So if, for instance classes tests fail, you can modify `package.json` e2e line, so that it looks like this:

    "e2e": "nightwatch --skiptags classes",

Tests will continue to run but the classes tests will be skipped. Refer to the test files for the appropriate tag name.


