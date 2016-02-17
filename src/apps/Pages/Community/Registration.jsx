import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import Syncano from 'syncano';

export default React.createClass({
  displayName: 'Registration',

  getInitialState() {
    return {
      textFieldValue: '',
      registerState: null
    };
  },

  getStyles() {
    return {
      componentBody: {
        textAlign: 'center'
      },
      inviteButton: {
        width: 152,
        marginTop: 16,
        backgroundColor: '#38b7ea'
      }
    };
  },

  handleTextFieldChange(event) {
    this.setState({
      textFieldValue: event.target.value
    });
  },

  handleButtonPress() {
    const {Webhook} = Syncano({accountKey: SYNCANO_API_KEY});
    const SLACK_PUBLIC_WEBHOOK = '95f37de28a7f95f07b2128677e97d116fcf8813b';
    let payload = JSON.stringify({email: this.state.textFieldValue});

    Webhook.please().runPublic({
      instanceName: SYNCANO_INSTANCE_NAME,
      public_link: SLACK_PUBLIC_WEBHOOK},
      {payload}
    ).then((trace) => {
      let data = JSON.parse(trace.result.stdout);

      this.setState({registerState: data.success});
    });
  },

  render() {
    let styles = this.getStyles();
    let content = '';

    if (this.state.registerState === null) {
      content = (
        <div>
          <h5>Sign up today and be part of still growing community!</h5>
          <TextField
            floatingLabelText='Email address'
            value={this.state.textFieldValue}
            type='email'
            onChange={this.handleTextFieldChange}
          /><br/>
          <RaisedButton
            style={styles.inviteButton}
            label='Get an invite'
            onClick={this.handleButtonPress}
          />
        </div>);
    } else if (this.state.registerState === true) {
      content = (
        <div>
          <h5>Thank you for signing up!</h5>
          Please check your inbox to find invitation for Slack and Forum.
        </div>);
    } else if (this.state.registerState === false) {
      content = (
        <div>
          <h5>Something went wrong!</h5>
          There was a problem with registation, please contact support at support@eyedea.io
        </div>);
    }

    return (
      <div style={styles.componentBody}>
        {content}
      </div>
      );
  }
});
