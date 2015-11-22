import Reflux from 'reflux';

import StoreFormMixin from '../../mixins/StoreFormMixin';

import Actions from './ProfileActions';

export default Reflux.createStore({
  listenables: Actions,
  mixins: [StoreFormMixin],

  init() {
    this.listenToForms();
  },

  onFetchBillingProfileCompleted(payload) {
    this.trigger(payload);
  },

  onUpdateBillingProfileCompleted() {
    this.trigger({feedback: 'Billing address changed successfully.'});
  }
});
