/* eslint-disable */
import React from 'react';
import {Router, Route, History} from 'react-router';

// Pages
import AppPage from './pages/app.react';
import DashboardPage from './pages/dashboard.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import Test from './apps/Test';

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

export default (
  <Route path="/" component={AppPage}>
  <Route path="test" component={Test} />
  </Route>
);