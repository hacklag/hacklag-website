import { computed } from 'utils';

export default {
  profile: {},
  userData: {},
  @computed get isLoggedIn() {
    return !!Object.keys(this.profile).length;
  },
};
