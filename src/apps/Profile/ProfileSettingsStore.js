import Reflux from 'reflux';

import StoreFormMixin from '../../mixins/StoreFormMixin';

import SessionStore from '../Session/SessionStore';
import SessionActions from '../Session/SessionActions';
import Actions from './ProfileActions';

export default Reflux.createStore({
  listenables: Actions,
  mixins: [StoreFormMixin],

  getInitialState() {
    let user = SessionStore.getUser({});

    return {
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    };
  },

  init() {
    this.data = this.getInitialState();
    this.listenTo(SessionStore, this.checkSession);
    this.listenToForms();
  },

  checkSession(Session) {
    console.debug('ProfileSettingsStore:checkSession');
    if (Session.isReady()) {
      let user = SessionStore.getUser({});

      this.trigger({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email
      });
    }
  },

  onUpdateSettingsCompleted(payload) {
    SessionActions.setUser(payload);

    this.trigger({
      feedback: 'Profile saved successfully.'
    });
  }
});
