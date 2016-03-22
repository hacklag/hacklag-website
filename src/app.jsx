import './app.sass';
import './segment';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Pages
import LandingPage from './pages/landingpage';
import NotFoundPage from './pages/notfound';
import HackbatPage from './pages/hackbat';

// Page components
import LandingRegister from './apps/LandingRegister';
import Hackbat from './apps/Hackbat';

render(
  <Router history={browserHistory}>
    <Route path="/">
      <Route component={LandingPage}>
        <IndexRoute component={LandingRegister}/>
        <Route
          path="bialystok"
          component={LandingRegister.Bialystok} />
        <Route
          path="explorerhq"
          component={LandingRegister.ExplorerHQ} />
      </Route>
      <Route
        path="hackbat"
        component={HackbatPage}>
        <IndexRoute component={Hackbat}/>
      </Route>
    </Route>
    <Route
      path="*"
      component={NotFoundPage} />
  </Router>,
  document.getElementById('app')
);
