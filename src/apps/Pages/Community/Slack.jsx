import React from 'react';
import {TextField, RaisedButton} from 'material-ui';
import Syncano from 'syncano';

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
    let emailPayload = '{"email": "' + this.state.textFieldValue + '"}';
    const {Webhook} = Syncano({accountKey: SYNCANO_API_KEY});

    Webhook.please().runPublic({
      instanceName: 'silent-rain-3110',
      public_link: '391f2e566770e4350451464fbaca51ef35865994',
      payload: {emailPayload}
    }).then((trace) => {
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
