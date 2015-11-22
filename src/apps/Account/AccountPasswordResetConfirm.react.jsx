import React from 'react';
import Reflux from 'reflux';
import {Router, Route} from 'react-router';

// Utils
import FormMixin from '../../mixins/FormMixin';

// Stores and Actions
import Store from './AuthStore';
import Actions from './AuthActions';

// Components
import MUI from 'syncano-material-ui';
import Container from '../../common/Container/AccountContainer.react';

export default React.createClass({

  displayName: 'AccountPasswordResetConfirm',

  mixins: [
    Reflux.connect(Store),
    Router.State,
    FormMixin
  ],

  validatorConstraints: {
    password: {
      presence: true
    },
    confirmPassword: {
      presence: true,
      equality: 'password'
    }
  },

  handleSuccessfullValidation() {
    let params = this.getParams();

    Actions.passwordResetConfirm({
      new_password: this.state.password,
      uid: params.uid,
      token: params.token
    });
  },

  render() {
    return (
      <Container>
        <div className="account-container__content__header">
          <p className="">Choose a new password</p>
        </div>
        {this.renderFormNotifications()}
        <form
          onSubmit={this.handleFormValidation}
          className="account-container__content__form"
          acceptCharset="UTF-8"
          method="post">

          <MUI.TextField
            ref="password"
            valueLink={this.linkState('password')}
            errorText={this.getValidationMessages('password').join(' ')}
            type="password"
            name="password"
            className="text-field"
            autoComplete="password"
            hintText="New password"
            fullWidth={true}/>

          <MUI.TextField
            ref="confirmPassword"
            valueLink={this.linkState('confirmPassword')}
            errorText={this.getValidationMessages('confirmPassword').join(' ')}
            type="password"
            name="confirmPassword"
            className="text-field vm-4-b"
            autoComplete="confirmPassword"
            hintText="Confirm password"
            fullWidth={true}/>

          <MUI.RaisedButton
            type="submit"
            label="Change password"
            fullWidth={true}
            labelStyle={{fontSize: '16px'}}
            style={{boxShadow: 'none', height: '48px'}}
            primary={true}/>
        </form>
      </Container>
    );
  }
});
