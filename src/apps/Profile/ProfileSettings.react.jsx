import React from 'react';
import Reflux from 'reflux';

import FormMixin from '../../mixins/FormMixin';

import Actions from './ProfileActions';
import Store from './ProfileSettingsStore';

import MUI from 'syncano-material-ui';

export default React.createClass({

  displayName: 'ProfileSettings',

  mixins: [
    Reflux.connect(Store),
    FormMixin
  ],

  validatorConstraints: {
    firstName: {
      presence: true
    },
    lastName: {
      presence: true
    }
  },

  getStyles() {
    return {
      content: {
        padding: '0 0 48px'
      },
      form: {
        maxWidth: 416
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
      }
    };
  },

  handleSuccessfullValidation() {
    Actions.updateSettings(this.state);
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.content}>
        {this.renderFormNotifications()}
        <form
          style={styles.form}
          onSubmit={this.handleFormValidation}
          acceptCharset="UTF-8"
          method="post">

          <MUI.TextField
            ref="firstName"
            valueLink={this.linkState('firstName')}
            defaultValue={this.state.firstName}
            errorText={this.getValidationMessages('firstName').join(' ')}
            name="firstName"
            floatingLabelText="First name"
            className="text-field"
            autoComplete="firstName"
            hintText="First name"
            fullWidth={true}/>

          <MUI.TextField
            ref="lastName"
            valueLink={this.linkState('lastName')}
            defaultValue={this.state.lastName}
            errorText={this.getValidationMessages('lastName').join(' ')}
            name="lastName"
            floatingLabelText="Last name"
            className="text-field"
            autoComplete="lastName"
            hintText="Last name"
            fullWidth={true}/>

          <MUI.TextField
            ref="email"
            name="email"
            value={this.state.email}
            floatingLabelText="Email"
            className="text-field vm-6-b"
            autoComplete="email"
            hintText="Your email"
            disabled={true}
            fullWidth={true}/>

          <MUI.RaisedButton
            type="submit"
            label="Update"
            style={styles.updateButton}
            labelStyle={styles.updateButtonLabel}
            className="raised-button"
            secondary={true}/>
        </form>
      </div>
    );
  }
});
