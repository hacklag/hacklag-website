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
import DashboardPage from './pages/dashboard.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import SessionStore from './apps/Session/SessionStore';
import Test from './apps/Test';
import SyncanoTest from './apps/Test2';
import Account from './apps/Account';

tapPlugin();


function requireAuth(nextState, replaceState) {
  if (!SessionStore.isAuthenticated()) {
    replaceState({nextPathname: nextState.location.pathname}, '/login');
  }
}

const history = useBasename(createHistory)({
  basename: '/dashboard'
});

render(
  <Router>
    <Route path="login" component={Account.Login}/>
    <Route path="signup" component={Account.Signup}/>
    <Route path="activate/:uid/:token" component={Account.Activate}/>
    <Route path="password/update" component={Account.PasswordUpdate}/>
    <Route path="password/reset" component={Account.PasswordReset}/>
    <Route path="password/reset/:uid/:token" component={Account.PasswordResetConfirm}/>

    <Route path="/" component={AppPage}>
      <Route path="test" component={SyncanoTest}/>

      <Route path="dashboard" component={DashboardPage} onEnter={requireAuth}>
        <IndexRoute component={Test}/>
        <Route path="test" component={Test}/>
      </Route>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
