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
import Container from '../../common/Container/Container.react';


export default React.createClass({

  displayName: 'AccountLogin',

  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    History,
    Reflux.connect(Store),
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
    // I don't know if it's good place for this but it works

    console.log(this.props.location);
    console.log(this.props.params);

    if (SessionStore.isAuthenticated()) {
      if (this.props.location.state && this.props.location.state.nextPathname) {
        this.history.pushState(null, this.props.location.state.nextPathname);
      } else {
        this.history.pushState(null, '/dashboard');
      }
    }

    //let invKey = this.getQuery().invitation_key || null;

    //if (invKey !== null && SessionActions.getInvitationFromUrl() !== invKey) {
    //  SessionActions.setInvitationFromUrl(invKey);
    //}
  },

  handleSuccessfullValidation(data) {
    Actions.passwordSignIn({
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

            <div style={{fontSize: '1.5rem', marginBottom: 24, textAlign: 'center'}}>
              Access your dashboard
            </div>

            {this.renderFormNotifications()}

            <form
              styles={{marginBottom: 24}}
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
                autoComplete="password"
                hintText="My password"
                fullWidth={true}
                style={{marginBottom: 12}}/>

              <MUI.RaisedButton
                type="submit"
                label="Login"
                labelStyle={{fontSize: '16px'}}
                fullWidth={true}
                style={{boxShadow: 'none', height: '48px', marginBottom: 24}}
                primary={true}/>

            </form>

            <Common.SocialAuthButtonsList style={{marginBottom: 24}}/>


            <div><Link to="password-reset">Forgot password?</Link></div>
            <div>Don't have an account? <Link to="signup">Sign up here</Link></div>


          </MUI.Paper>
        </Row>
        </div>
      </Grid>
    );
  }
});
