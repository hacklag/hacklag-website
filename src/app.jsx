import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

// Frameworks
import './framework/raven';
import './framework/segment';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, History} from 'react-router';
import tapPlugin from 'react-tap-event-plugin';
import {createHistory, useBasename} from 'history';

// Pages
import AppPage from './pages/app.react';
import DashboardPage from './pages/dashboard.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import SessionStore from './apps/Session/SessionStore';
import Test from './apps/Test';
import Account from './apps/Account';

tapPlugin();


const NoMatch = React.createClass({

  render() {
    return (
      <div>
        <h2>NO</h2>
      </div>
    );
  }
});

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
    <Route path="/" component={AppPage}>
      <Route path="login" component={Account.Login}/>
      <Route path="signup" component={Account.Signup}/>
      <Route path="activate/:uid/:token" component={Account.Activate}/>
      <Route path="password/update" component={Account.PasswordUpdate}/>
      <Route path="password/reset" component={Account.PasswordReset}/>
      <Route path="password/reset/:uid/:token" component={Account.PasswordResetConfirm}/>
      <Route path="test" component={NoMatch} onEnter={requireAuth}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
