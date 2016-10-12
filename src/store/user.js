import { computed } from 'utils';

export default {
  profile: {},
  @computed get isLoggedIn() {
    return !!Object.keys(this.profile).length;
  },
};
