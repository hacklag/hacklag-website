import CreateActions from '../../utils/ActionsConstructor.js';

export default CreateActions(
  {
    fetch: {},
    setInvitations: {},
    fetchInvitations: {
      asyncResult: true,
      loading: true,
      children: ['completed', 'failure'],
      method: 'Syncano.Actions.AccountInvitations.list'
    },
    acceptInvitations: {
      asyncResult: true,
      children: ['completed', 'failure'],
      method: 'Syncano.Actions.AccountInvitations.accept'
    },
    declineInvitations: {
      asyncResult: true,
      children: ['completed', 'failure'],
      method: 'Syncano.Actions.AccountInvitations.decline'
    }
  },
  {
    withCheck: true
  }
);
