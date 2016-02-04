import CreateActions from '../../utils/ActionsConstructor.js';

export default CreateActions({
  updateSettings: {
    asyncResult: true,
    asyncForm: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Profile.updateSettings'
  },
  changePassword: {
    asyncResult: true,
    asyncForm: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Profile.changePassword'
  },
  fetchBillingProfile: {
    asyncResult: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.getProfile'
  },
  updateBillingProfile: {
    asyncResult: true,
    asyncForm: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.updateProfile'
  },
  resetKey: {
    asyncResult: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Profile.resetKey'
  },
  fetchBillingCard: {
    asyncResult: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.getCard'
  },
  updateBillingCard: {
    asyncResult: true,
    asyncForm: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.updateCard'
  },
  fetchInvoices: {
    asyncResult: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.listInvoices'
  }
});
