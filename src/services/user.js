import { action, request } from 'utils';

const COMMUNITY_REGISTER_URL = `https://api.syncano.io/v1.1/instances/${SYNCANO_INSTANCE_NAME}/endpoints/scripts/p/aab6325ffceb4f324ddc6370fa79a6d4ffdf2280/communityregistration_endpoint/?template=script_json`;
const LOGIN_REGISTER_URL = 'https://silent-field-9988.syncano.space/magiclink/login/';
const VERIFY_USER_URL = 'https://silent-field-9988.syncano.space/magiclink/verify/';
const GET_USER = 'https://silent-field-9988.syncano.space/magiclink/getuser/';
export default class User {
  @action signup = async ({ email }) => {
    this.store.pending.set('user.signup', { status: true });
    const { status, communicate } = await request.post(COMMUNITY_REGISTER_URL, { email });

    this.store.messages.set('user.signup', {
      status: status === 'true' ? 'success' : 'failure',
      message: status === 'true' ? 'We\'ve sent you invitation.' : communicate,
    });

    this.store.pending.set('user.signup', { status: false });
  }
  setUserData(key, email) {
    localStorage.setItem('userKey', key);
    localStorage.setItem('email', email);
  }
  pollVerify = (email) => {
    const form = new FormData();
    form.append('email', email);

    const promise = setInterval(() => {
      fetch(VERIFY_USER_URL, {
        method: 'post',
        body: form,
      }).then(res => {
        res.json()
          .then(user => {
            if (user.status === 'true') {
              const { userData } = user;
              const { id, userKey } = userData;
              localStorage.setItem('userKey', userKey);
              localStorage.setItem('email', email);
              window.location.assign(`/profile/${id}`);
              clearInterval(promise);
            }
          });
      })
      .catch(err => {
        this.store.messages.set('user.register', {
          status: status === 'true' ? 'success' : 'failure',
          message: status === 'true' ? 'You have been registered, chcek your email' : err,
        });
      });
    }, 4000);
  }
  @action getuser = async (key) => {
    const { userData } = await request.post(GET_USER, {
      userkey: key,
    });
    this.store.user.userData = userData;
  }
  @action login = async (email) => {
    const { body, status } = await request.post(LOGIN_REGISTER_URL, {
      email,
    });
    this.pollVerify(email);
    this.store.messages.set('user.login', {
      status: status === 'true' ? 'success' : 'failure',
      message: status === 'true' ? 'Logged in' : body,
    });
    this.store.pending.set('user.login', { status: false });
  }

  @action register = async (form) => {
    const { email, firstname, lastname, isVolunteer } = form;
    const { body, status } = await request.post(LOGIN_REGISTER_URL, {
      email,
      firstname,
      lastname,
      isVolunteer,
    });
    this.pollVerify(email);
    this.store.messages.set('user.register', {
      status: status === 'true' ? 'success' : 'failure',
      message: status === 'true' ? 'You have been registered, chcek your email' : body,
    });
    this.store.pending.set('user.register', { status: false });
  }
}
