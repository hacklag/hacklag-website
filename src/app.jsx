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

// Home
import Home from './apps/Pages/Home/Home';
import News from './apps/Pages/Home/News';
import BecomeAMember from './apps/Pages/Home/BecomeAMember';

// About
import About from './apps/Pages/About/About';
import Contact from './apps/Pages/About/Contact';
import FAQ from './apps/Pages/About/FAQ';
import Place from './apps/Pages/About/Place';

// Blog
import Blog from './apps/Pages/Blog/Blog';

// Community
import Agreement from './apps/Pages/Community/Agreement';
import Clubs from './apps/Pages/Community/Clubs';
import Community from './apps/Pages/Community/Community';
import Hydepark from './apps/Pages/Community/Hydepark';
import Join from './apps/Pages/Community/Join';
import Slack from './apps/Pages/Community/Slack';

// Events
import Calendar from './apps/Pages/Events/Calendar';
import Events from './apps/Pages/Events/Events';

// Gallery
import Gallery from './apps/Pages/Gallery/Gallery';

// Partners
import Donate from './apps/Pages/Partners/Donate';
import Partners from './apps/Pages/Partners/Partners';

// Apps
import Test from './apps/Test';

const history = useBasename(createHistory)({
  basename: '/dashboard'
});

render(
  <Router>
    <Route component={AppPage}>
      <Route path="/" component={Home}/>
      <Route path="events" component={Events}/>
      <Route path="blog" component={Blog}/>
      <Route path="gallery" component={Gallery}/>
      <Route path="community" component={Community}/>
      <Route path="partners" component={Partners}/>
      <Route path="donate" component={Donate}/>
      <Route path="faq" component={FAQ}/>
      <Route path="about" component={About}/>
      <Route path="sponsors" component={Partners}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
