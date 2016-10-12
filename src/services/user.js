import { action, request } from 'utils';

const COMMUNITY_REGISTER_URL = 'https://api.syncano.io/v1.1/instances/silent-rain-3110/endpoints/scripts/p/aab6325ffceb4f324ddc6370fa79a6d4ffdf2280/communityregistration_endpoint/?template=script_json';

export default class User {
  @action signup = async ({ email }) => {
    const { status, communicate } = await request.post(COMMUNITY_REGISTER_URL, { email });

    this.store.messages.set('user.signup', {
      status: status === 'true' ? 'success' : 'failure',
      message: status === 'true' ? 'We\'ve sent you invitation.' : communicate,
    });
  }
}
