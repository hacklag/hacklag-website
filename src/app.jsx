import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
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

let routes = (
  <Router.Route name="app" path="/" handler={AppPage}>
    <Router.Route name="events" path="/events" handler={Events}/>
    <Router.Route name="blog" path="/blog" handler={Blog}/>
    <Router.Route name="gallery" path="/gallery" handler={Gallery}/>
    <Router.Route name="community" path="/community" handler={Community}/>
    <Router.Route name="partners" path="/partners" handler={Partners}/>
    <Router.Route name="donate" path="/donate" handler={Donate}/>
    <Router.Route name="faq" path="/faq" handler={FAQ}/>
    <Router.Route name="about" path="/about" handler={About}/>
    <Router.Route name="sponsors" path="/sponsors" handler={Partners}/>
    <Router.DefaultRoute handler={Home}/>
  </Router.Route>
);

Router.run(routes, function(Handler) {
  ReactDOM.render(
    <Handler/>, document.getElementById('app')
  );
});


