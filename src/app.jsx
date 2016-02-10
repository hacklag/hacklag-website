import 'babel-core/polyfill';
import 'normalize.css';
import './app.sass';

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import {DefaultRoute, Link, Route, RouteHandler, History} from 'react-router';
import {createHistory, useBasename} from 'history';

// Frameworks
import './framework/raven';
import './framework/segment';

// Pages
import AppPage from './pages/app.react';
import NotFoundPage from './pages/notfound.react';
import MainPage from './pages/mainpage.react';
import Events from './pages/events.react';
import Blog from './pages/blog.react';
import Gallery from './pages/gallery.react';
import Community from './pages/community.react';
import Partners from './pages/partners.react';
import Donate from './pages/donate.react';
import FAQ from './pages/faq.react';
import About from './pages/about.react';
import Sponsors from './pages/sponsors.react';

// Apps
import Test from './apps/Test';

const history = useBasename(createHistory)({
  basename: '/dashboard'
});

let routes = (
  <Route name="app" path="/" handler={AppPage}>
    <Route name="events" path="/events" handler={Events}/>
    <Route name="blog" path="/blog" handler={Blog}/>
    <Route name="gallery" path="/gallery" handler={Gallery}/>
    <Route name="community" path="/community" handler={Community}/>
    <Route name="partners" path="/partners" handler={Partners}/>
    <Route name="donate" path="/donate" handler={Donate}/>
    <Route name="faq" path="/faq" handler={FAQ}/>
    <Route name="about" path="/about" handler={About}/>
    <Route name="sponsors" path="/sponsors" handler={Sponsors}/>
    <DefaultRoute handler={MainPage}/>
  </Route>
);

Router.run(routes, function(Handler) {
  ReactDOM.render(
    <Handler/>, document.getElementById('app')
  );
});


