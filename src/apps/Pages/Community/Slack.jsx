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
    let account = new Syncano({accountKey: '802e2576b7a83f5a12982381de9b7fd117b07099'});
    let payload = '{"email": "' + this.state.textFieldValue + '"}';

    account.instance('silent-rain-3110').webhook('slackregistrator').run(payload)
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
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
