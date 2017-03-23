import { computed } from 'utils';

export default {
  profile: {},
  userKey: '',
  @computed get isLoggedIn() {
    return !!Object.keys(this.profile).length;
  },
};
