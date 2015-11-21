/* eslint-disable */
import React from 'react';
import Router from 'react-router-old';

// Pages
import AppPage from './pages/app.react';
import NotFoundPage from './pages/notfound.react';

// Apps
import Test from './apps/Test';

const Route = Router.Route;
const Redirect = Router.Redirect;
const NotFoundRoute = Router.NotFoundRoute;
const DefaultRoute = Router.DefaultRoute;

export default (
  <Route
    name="app"
    handler={AppPage}
    path="/"
    >
    <NotFoundRoute handler={NotFoundPage}/>

    {/* Test app */}
      <Route
        name="test"
        handler={Test}
        path="test" />

      <DefaultRoute handler={Test}/>
  </Route>
);
