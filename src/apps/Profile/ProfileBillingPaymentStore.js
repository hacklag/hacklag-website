import Reflux from 'reflux';

import StoreFormMixin from '../../mixins/StoreFormMixin';

import Actions from './ProfileActions';

export default Reflux.createStore({
  listenables: Actions,
  mixins: [StoreFormMixin],

  getInitialState() {
    return {
      showForm: false,
      show_form: false,
      isLoading: true,
      card: {},
      number: null,
      cvc: null,
      exp_month: null,
      exp_year: null
    };
  },

  init() {
    this.listenToForms();
  },

  onFetchBillingCardCompleted(payload) {
    this.trigger({
      isLoading: false,
      card: payload
    });
  },

  onFetchBillingCardFailure() {
    this.trigger({isLoading: false});
  },

  onUpdateBillingCardCompleted(payload) {
    let state = this.getInitialState();

    state.card = payload;
    state.isLoading = false;
    this.trigger(state);
  }
});
