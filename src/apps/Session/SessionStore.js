import Reflux from 'reflux';
import _ from 'lodash';

import Raven from '../../framework/raven';
import Connection from './Connection';

import SessionActions from './SessionActions';
import Theme from '../../common/Theme';

export default Reflux.createStore({
  listenables: SessionActions,

  init() {
    this.connection = Connection.get();
    this.token = localStorage.getItem('token') || null;
    this.userId = localStorage.getItem('userId') || null;
    this.user = null;
    this.instance = null;
    this.theme = null;
    this.signUpMode = null;

    if (this.token !== null) {
      this.connection.config.userKey = this.token;
    }

    if (this.isAuthenticated() && !this.user) {
      SessionActions.fetchUser(this.userId);
    }
  },

  getConnection(empty) {
    return this.connection || empty || null;
  },

  getToken(empty) {
    return this.token || empty || null;
  },

  getUser(empty) {
    return this.user || empty || null;
  },

  getInstance(empty) {
    return this.instance || empty || null;
  },

  getSignUpMode() {
    return this.signUpMode;
  },

  getTheme(empty) {
    return this.theme || empty || null;
  },

  getInvitationFromUrl() {
    console.info('SessionStore::getInvitationFomUrl');
    return localStorage.getItem('invitationKey');
  },

  getUTMData() {
    return JSON.parse(localStorage.getItem('UTMData'));
  },

  setAnalyticsIdentifying(user) {
    let UTMData = this.getUTMData();
    let analyticsIdentifyObject = {
      email: user.email,
      'Auth backend': user.network ? user.network : 'password'
    };

    if (!_.isUndefined(UTMData)) {
      _.extend(analyticsIdentifyObject, UTMData);
    }

    if (this.signUpMode) {
      window.analytics.identify(user.email, analyticsIdentifyObject);
    } else {
      window.analytics.identify(user.email);
    }
  },

  setToken(token) {
    console.info('SessionStore::setToken');
    this.token = token;
  },

  setInvitationFromUrl(invitationKey) {
    console.info('SessionStore::setInvitationFomUrl');
    localStorage.setItem('invitationKey', invitationKey);
  },

  setUser(user) {
    console.info('SessionStore::setUser');
    if (typeof user === 'undefined') {
      return;
    }

    this.user = user;

    if (typeof this.user.user_key === 'undefined') {
      this.user.user_key = this.token;
    } else {
      this.token = user.user_key;
      this.connection.config.userKey = user.user_key;
      localStorage.setItem('token', this.token);
      localStorage.setItem('userId', this.user.id);
    }

    Raven.setUserContext({
      email: user.username,
      id: user.id
    });

    this.setAnalyticsIdentifying(user);
    this.trigger(this);
  },

  setUTMData(query) {
    let UTMData = {
      'UTM Campaign': query.utm_campaign,
      'UTM Content': query.utm_content,
      'UTM Medium': query.utm_medium,
      'UTM Source': query.utm_source,
      'UTM Term': query.utm_term
    };

    if (query.utm_campaign) {
      localStorage.setItem('UTMData', JSON.stringify(UTMData));
    }
  },

  setInstance(instance) {
    console.info('SessionStore::setInstance');

    this.instance = instance;
    this.trigger(this);
  },

  setSignUpMode() {
    this.signUpMode = true;
  },

  setTheme(theme) {
    console.info('SessionStore::setTheme');
    this.theme = theme;
  },

  onFetchInstanceCompleted(payload) {
    console.info('SessionStore::onFetchInstanceCompleted');
    SessionActions.setInstance(payload);
  },

  onFetchInstanceFailure() {
    this.router.transitionTo('/404');
  },

  onFetchUserCompleted(payload) {
    console.info('SessionStore::onFetchUserCompleted');
    SessionActions.setUser(payload);
  },

  onFetchUserFailure() {
    console.info('SessionStore::onFetchUserFailure');
    this.onLogout();
  },

  removeInstance() {
    this.instance = null;
    if (this.theme) {
      this.theme.setTheme(Theme);
    }
  },

  removeSignUpMode() {
    this.signUpMode = null;
  },

  onLogin(payload) {
    console.info('SessionStore::onLogin');

    if (typeof payload === 'undefined' || typeof payload.user_key === 'undefined') {
      return;
    }

    this.token = payload.user_key;
    localStorage.setItem('token', this.token);
    SessionActions.setUser(payload);
  },

  onLogout() {
    this.token = null;
    this.user = null;
    this.connection = Connection.reset();

    localStorage.removeItem('token');
    localStorage.removeItem('invitationKey');
    this.removeInstance();
    this.trigger(this);

    Raven.setUserContext();
    window.analytics.identify();
    location.reload(true);
  },

  isAuthenticated() {
    if (this.token === 'undefined') {
      return false;
    }
    return this.token !== null;
  },

  isReady() {
    return this.isAuthenticated() && this.user !== null;
  }
});
