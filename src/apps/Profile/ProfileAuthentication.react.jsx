import React from 'react';
import Reflux from 'reflux';
import Radium from 'radium';

import FormMixin from '../../mixins/FormMixin';

import Store from './ProfileAuthenticationStore';
import Actions from './ProfileActions';

import MUI from 'syncano-material-ui';
import {Clipboard} from '../../common';

export default Radium(React.createClass({

  displayName: 'ProfileAuthentication',

  mixins: [
    Reflux.connect(Store),
    Reflux.ListenerMixin,
    FormMixin
  ],

  validatorConstraints: {
    current_password: {
      presence: true
    },
    newPassword: {
      presence: true
    },
    confirmNewPassword: {
      presence: true,
      equality: 'newPassword'
    }
  },

  getStyles() {
    return {
      content: {
        padding: '0px 0px 48px'
      },
      contentRow: {
        display: '-webkit-flex; display: flex',
        alignItems: 'center'
      },
      accountKey: {
        fontFamily: 'monospace'
      },
      updateButton: {
        height: 36,
        lineHeight: '36px',
        boxShadow: 0
      },
      updateButtonLabel: {
        lineHeight: '36px',
        fontWeight: 400,
        paddingLeft: 30,
        paddingRight: 30
      },
      settingsTitle: {
        paddingBottom: 10
      }
    };
  },

  handleResetClick() {
    Actions.resetKey();
  },

  handleSuccessfullValidation() {
    Actions.changePassword(this.state);
  },

  render() {
    let styles = this.getStyles();

    return (
      <div>
        <div style={styles.content}>
          <div>Account key</div>
          <div className="row" style={styles.contentRow}>
            <div className="col-xs-15" style={styles.accountKey}>{this.state.account_key}</div>
            <div className="col-xs-10">
              <Clipboard
                copyText={this.state.account_key}
                snackbarText="API key copied to the clipboard"
                snackbarAutoHideDuration={3000}
                text="COPY"/>
              <MUI.FlatButton
                label="RESET"
                primary={true}
                onClick={this.handleResetClick}/>
            </div>
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.settingsTitle}>Password settings</div>
          <div className="row" style={styles.contentRow}>
            <div className="col-md-15">
              <form
                onSubmit={this.handleFormValidation}
                acceptCharset="UTF-8"
                method="post">
                {this.renderFormNotifications()}
                <MUI.TextField
                  ref="currentPassword"
                  type="password"
                  valueLink={this.linkState('current_password')}
                  errorText={this.getValidationMessages('current_password').join(' ')}
                  name="currentPassword"
                  floatingLabelText="Current password"
                  className="text-field"
                  autoComplete="currentPassword"
                  hintText="Current password"
                  fullWidth={true} />
                <MUI.TextField
                  ref="newPassword"
                  type="password"
                  valueLink={this.linkState('newPassword')}
                  errorText={this.getValidationMessages('newPassword').join(' ')}
                  name="newPassword"
                  floatingLabelText="New password"
                  className="text-field"
                  autoComplete="newPassword"
                  hintText="New password"
                  fullWidth={true} />
                <MUI.TextField
                  ref="confirmNewPassword"
                  type="password"
                  valueLink={this.linkState('confirmNewPassword')}
                  errorText={this.getValidationMessages('confirmNewPassword').join(' ')}
                  name="confirmNewPassword"
                  floatingLabelText="Confirm new password"
                  className="text-field vm-6-b"
                  autoComplete="confirmNewPassword"
                  hintText="Confirm new password"
                  fullWidth={true} />
                <MUI.RaisedButton
                  type="submit"
                  label="Update"
                  style={styles.updateButton}
                  labelStyle={styles.updateButtonLabel}
                  className="raised-button"
                  secondary={true} />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}));
