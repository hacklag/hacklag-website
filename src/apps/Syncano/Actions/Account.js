import Hello from '../../../framework/hello';

export default {
  resendActivationEmail(email) {
    this.Connection
      .Accounts
      .resendActivationEmail(email)
      .then(this.completed)
      .catch(this.failure);
  },

  activate(payload) {
    this.Connection
      .Accounts
      .activate(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  passwordSignIn(payload) {
    this.Connection
      .connect(payload.email, payload.password)
      .then(this.completed)
      .catch(this.failure);
  },

  passwordSignUp(payload) {
    this.Connection
      .Accounts
      .create({
        email: payload.email,
        password: payload.password
      })
      .then(this.completed)
      .catch(this.failure);
  },

  passwordReset(email) {
    this.Connection
      .Accounts
      .passwordReset(email)
      .then(this.completed)
      .catch(this.failure);
  },

  passwordResetConfirm(payload) {
    this.Connection
      .Accounts
      .passwordResetConfirm(payload)
      .then(this.completed)
      .catch(this.failure);
  },

  socialLogin(network) {
    Hello
      .login(network)
      .then((auth) => {
        console.log('xxx', auth, network, this.Connection.user());
        this.Connection.user().login({socialToken: auth.authResponse.access_token, backend: network})
          .then((payload) => {
            payload.network = network;
            return payload;
          })
          .then(this.completed)
          .catch(this.failure);

        //.then((payload) => {
        //  console.log('YYY', payload);
        //});

        //  this.Connection
        //    .socialConnect(
        //    auth.network,
        //    auth.authResponse.access_token
        //  )
        //    .then((payload) => {
        //      payload.network = network;
        //      return payload;
        //    })
        //    .then(this.completed)
        //    .catch(this.failure);
      });
  }
};
