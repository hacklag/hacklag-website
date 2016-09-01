import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import createRoutes from './routes';

ReactDOM.render(
  <Router
    history={browserHistory}
    routes={{
      childRoutes: createRoutes(),
    }}
  />,
  document.getElementById('root')
);
