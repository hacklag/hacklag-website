import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

import React from 'react';
import {render} from 'react-dom';
import {Router, Route, History, IndexRoute} from 'react-router';
import {createHistory, useBasename} from 'history';

// Frameworks
import './framework/raven';
import './framework/segment';

// Pages
import AppPage from './pages/app.react';
import NotFoundPage from './pages/notfound.react';

// Page components
import {
  // Home
  Home,
  News,
  BecomeAMember,

  // About
  About,
  Contact,
  FAQ,
  Place,

  // Blog
  Blog,

  // Community
  Agreement,
  Clubs,
  Community,
  Hydepark,
  Join,
  Slack,

  // Events
  Calendar,
  Events,

  // Gallery
  Gallery,

  // Partners
  Donate,
  Partners
} from './apps/Pages';

// Apps
import Test from './apps/Test';

const history = useBasename(createHistory)({
  basename: '/dashboard'
});

render(
  <Router>
    <Route component={AppPage}>
      <Route path="/" component={Home}/>
      <Route path="news" component={News}/>
      <Route path="becomeamember" component={BecomeAMember}/>

      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="faq" component={FAQ}/>
      <Route path="place" component={Place}/>

      <Route path="blog" component={Blog}/>

      <Route path="agreement" component={Agreement}/>
      <Route path="clubs" component={Clubs}/>
      <Route path="community" component={Community}/>
      <Route path="hydepark" component={Hydepark}/>
      <Route path="join" component={Join}/>
      <Route path="slack" component={Slack}/>

      <Route path="calendar" component={Calendar}/>
      <Route path="events" component={Events}/>

      <Route path="gallery" component={Gallery}/>

      <Route path="partners" component={Partners}/>
      <Route path="donate" component={Donate}/>

      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
