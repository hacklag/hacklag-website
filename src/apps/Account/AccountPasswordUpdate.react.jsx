import React from 'react';
import Reflux from 'reflux';
import {Router, Route} from 'react-router';

import Store from './AuthStore';
import Constants from './AuthConstants';

import MUI from 'material-ui';
import Container from '../../common/Container/AccountContainer.react';

export default React.createClass({

  displayName: 'AccountPasswordUpdate',

  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    Reflux.connect(Store),
    Router.State,
    Router.Navigation
  ],

  getStyles() {
    return {
      text: {
        color: 'rgba(0, 0, 0, 0.54)',
        lineHeight: '20px',
        textAlign: 'center',
        padding: '0 14%'
      },
      button: {
        width: '100%',
        boxShadow: 'none',
        height: '48px',
        marginBottom: 28
      },
      buttonLabel: {
        fontSize: 16
      }
    };
  },

  handleButtonClick() {
    this.transitionTo(Constants.LOGIN_REDIRECT_PATH);
  },

  render() {
    let styles = this.getStyles();

    return (
      <Container>
        <div className="account-container__content__header">
          <p className="vm-0-b">Password updated</p>
        </div>
        <div>
          <p
            className="vm-4-b"
            style={styles.text}>
            Sweet! Your new password has now been set and you can login.
          </p>

          <MUI.RaisedButton
            style={styles.button}
            labelStyle={styles.buttonLabel}
            label="Go to dashboard"
            onClick={this.handleButtonClick}
            primary={true}/>
        </div>
      </Container>
    );
  }
});
