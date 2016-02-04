import CreateActions from '../../utils/ActionsConstructor.js';

export default CreateActions({
  fetch: {},
  setBillingPlan: {},
  setChartLegend: {},
  setOverage: {},

  fetchBillingProfile: {
    asyncResult: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.getProfile'
  },
  updateBillingProfile: {
    asyncResult: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.updateProfile'
  },
  cancelNewPlan: {
    asyncResult: true,
    asyncForm: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.cancelNewPlan'
  },
  fetchBillingUsage: {
    asyncResult: true,
    asyncForm: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.getUsage'
  },
  fetchBillingCard: {
    asyncResult: true,
    asyncForm: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.getCard'
  },
  fetchBillingSubscriptions: {
    asyncResult: true,
    asyncForm: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.listSubscriptions'
  },
  cancelSubscriptions: {
    asyncResult: true,
    asyncForm: true,
    loading: true,
    children: ['completed', 'failure'],
    method: 'Syncano.Actions.Billing.cancelSubscriptions'
  }
});
