import React from 'react';
import Reflux from 'reflux';
import {Router, Route, Link, History} from 'react-router';
import {Grid, Row, Cell} from 'react-inline-grid';

// Utils
import FormMixin from '../../mixins/FormMixin';

// Stores and Actions
import SessionStore from '../Session/SessionStore';
import SessionActions from '../Session/SessionActions';
import Store from './AuthStore';
import Actions from './AuthActions';
import Constants from './AuthConstants';

// Components
import MUI from 'material-ui';
import Common from '../../common';
import Container from '../../common/Container/AccountContainer.react';

export default React.createClass({

  displayName: 'AccountSignup',

  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    History,
    Reflux.connect(Store),
    //Router.State,
    FormMixin
  ],

  //statics: {
  //  willTransitionTo(transition) {
  //    if (SessionStore.isAuthenticated()) {
  //      transition.redirect(Constants.LOGIN_REDIRECT_PATH, {}, {});
  //    }
  //  }
  //},

  validatorConstraints: {
    email: {
      presence: true,
      email: {
        message: '^Invalid email address'
      }
    },
    password: {
      presence: true
    }
  },

  componentWillUpdate() {
    if (SessionStore.isAuthenticated()) {
      if (this.props.location.state && this.props.location.state.nextPathname) {
        this.history.pushState(null, this.props.location.state.nextPathname);
      } else {
        this.history.pushState(null, '/dashboard');
      }
    }
  },

  getBottomContent() {
    return (
      <div>
        By signing up you agree to our <a href="http://www.syncano.com/terms-of-service/" target="_blank">
        Terms of Use and Privacy Policy</a>.
      </div>
    );
  },

  handleSuccessfullValidation(data) {
    SessionStore.setSignUpMode();

    Actions.passwordSignUp({
      email: data.email,
      password: data.password
    });
  },

  render() {
    return (
      <Grid>
        <div style={{marginTop: '10%'}}>
          <Row is="center">
            <MUI.Paper style={{margin: 10, padding: 24, maxWidth: 500}}>
              <div>
                <p>Start Building Now</p>
                <small>
                  Simply enter your email, create a password and you're in!<br />
                  No credit card required.
                </small>
              </div>

              {this.renderFormNotifications()}

              <form
                onSubmit={this.handleFormValidation}
                acceptCharset="UTF-8"
                method="post">
                <MUI.TextField
                  ref="email"
                  valueLink={this.linkState('email')}
                  errorText={this.getValidationMessages('email').join(' ')}
                  name="email"
                  className="text-field"
                  autoComplete="email"
                  hintText="Email"
                  fullWidth={true}/>

                <MUI.TextField
                  ref="password"
                  valueLink={this.linkState('password')}
                  errorText={this.getValidationMessages('password').join(' ')}
                  type="password"
                  name="password"
                  className="text-field vm-4-b"
                  autoComplete="password"
                  hintText="My password"
                  fullWidth={true}/>

                <MUI.RaisedButton
                  type="submit"
                  label="Create my account"
                  labelStyle={{fontSize: '16px'}}
                  fullWidth={true}
                  style={{boxShadow: 'none', height: '48px'}}
                  primary={true}/>
              </form>
              <Common.SocialAuthButtonsList mode="signup"/>

              <div>Already have an account? <Link to="login"> Login</Link></div>

            </MUI.Paper>
          </Row>

        </div>
      </Grid>
    );
  }
});
