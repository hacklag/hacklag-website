import CreateActions from '../../utils/ActionsConstructor.js';

export default CreateActions(
  {
    login: {},
    logout: {},
    setToken: {},
    setRouter: {},
    setUser: {},
    setTheme: {},
    setInstance: {},
    setInvitationFromUrl: {},
    getInvitationFromUrl: {},
    fetchUser: {
      asyncResult: true,
      children: ['completed', 'failure'],
      method: 'Syncano.Actions.Profile.getUser'
    },
    fetchInstance: {
      asyncResult: true,
      children: ['completed', 'failure'],
      method: 'Syncano.Actions.Instances.set'
    }
  }
);
