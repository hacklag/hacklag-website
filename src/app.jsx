import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-old';
import URI from 'urijs';
import _ from 'lodash';
import routes from './routes';
import tapPlugin from 'react-tap-event-plugin';

let container = document.getElementById('app');

tapPlugin();

Router.run(routes, (Root, state) => {
  let uri = new URI();
  let originalUri = uri.normalize().toString();
  let pathname = decodeURIComponent(state.pathname).replace('//', '/');
  let query = _.extend({}, uri.search(true), state.query);

  // Remove trailing slash
  if (pathname.length > 1 && pathname.match('/$') !== null) {
    pathname = pathname.slice(0, -1);
  }

  uri.search(query);
  uri.hash(`${pathname}${uri.search()}`);
  uri.search('');

  let normalizedUri = uri.normalize().toString();

  if (originalUri !== normalizedUri) {
    location.href = normalizedUri;
    return;
  }

  ReactDOM.render(<Root/>, container);
});
