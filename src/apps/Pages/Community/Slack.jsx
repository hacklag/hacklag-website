import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import Syncano from 'syncano';
import Router from 'react-router';

export default React.createClass({
  displayName: 'Slack',

  getInitialState() {
    return {
      textFieldValue: ''
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

  handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  },

  handleButtonPress() {
    const {Webhook} = Syncano({accountKey: SYNCANO_API_KEY});
    const SLACK_PUBLIC_WEBHOOK = '391f2e566770e4350451464fbaca51ef35865994';
    let payload = '{email: "$this.state.textFieldValue"}';

    Webhook.please().runPublic({
      instanceName: SYNCANO_INSTANCE_NAME,
      public_link: SLACK_PUBLIC_WEBHOOK},
      {payload}
    ).then((trace) => {
      console.log(trace);
    });
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        Sign up today and be part of still growing community!<br/>
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
      </div>
    );
  }
});
