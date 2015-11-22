import Reflux from 'reflux';
import Actions from './ProfileActions';

export default Reflux.createStore({
  listenables: Actions,

  getInitialState() {
    return {
      isLoading: true,
      invoices: []
    };
  },

  onFetchInvoicesCompleted(invoices) {
    console.debug('ProfileBillingInvoicesStore::onFetchInvoicesCompleted');
    this.trigger({
      isLoading: false,
      invoices: Object.keys(invoices).map((key) => invoices[key])
    });
  },

  onFetchInvoicesFailure() {
    console.debug('ProfileBillingInvoicesStore::onFetchInvoicesFailure');
    this.trigger({isLoading: false});
  }
});
