import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, History, IndexRoute} from 'react-router';
import tapPlugin from 'react-tap-event-plugin';
import {createHistory, useBasename} from 'history';

// Frameworks
import './framework/raven';
import './framework/segment';

// Pages
import AppPage from './pages/app.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import Test from './apps/Test';

tapPlugin();

const history = useBasename(createHistory)({
  basename: '/dashboard'
});

render(
  <Router>
    <Route path="/" component={AppPage}>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
