/* eslint-disable */
import React from 'react';
import {Router, Route, History} from 'react-router';

// Pages
import AppPage from './pages/app.react';
import DashboardPage from './pages/dashboard.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import SessionStore from './apps/Session/SessionStore';
import Test from './apps/Test';
import Account from './apps/Account';


const NoMatch = React.createClass({

  mixins: [History],

  render() {
    return (
      <div>
        <h2>NO</h2>
      </div>
    )
  }
});

function requireAuth(nextState, replaceState) {
  if (!SessionStore.isAuthenticated())
    replaceState({nextPathname: nextState.location.pathname}, '/login')
}

export default (
  <Route path="/" component={AppPage}>
    <Route path="login" component={Account.Login}/>
    <Route path="signup" component={Account.Signup}/>
    <Route path="activate/:uid/:token" component={Account.Activate}/>
    <Route path="password/update" component={Account.PasswordUpdate}/>
    <Route path="password/reset" component={Account.PasswordReset}/>
    <Route path="password/reset/:uid/:token" component={Account.PasswordResetConfirm}/>

    <Route path="dashboard" component={DashboardPage} onEnter={requireAuth} />
      <Route path="test" component={Test} />
      <Route path="*" component={Test}/>
    </Route>

  </Route>
);