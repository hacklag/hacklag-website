import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton} from 'material-ui';

export default Radium(React.createClass({
  displayName: 'LandingRegister',

  getInitialState() {
    return {
      textFieldValue: ''
    };
  },

  getStyles() {
    return {
      componentBody: {
        color: '5d5d5d',
        //backgroundColor: '#fafafa',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 184
      },
      develBackgroundImage: {
        backgroundImage: 'url(/img/background_sendemail.png)',
        backgroundSize: '100%'
      },
      logoBar: {
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 324
      },
      contentBar: {
        border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        width: 554
      },
      hackLagLogo: {
        width: 'auto',
        maxHeight: 392
      },
      socialBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24
      },
      socialLogo: {
        width: 64,
        height: 64
      },
      inviteButton: {
        backgroundColor: '#ec018c'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.develBackgroundImage}>
        <div style={styles.componentBody}>
          <div style={styles.logoBar}>
            <img style={styles.hackLagLogo} src={"/img/hacklag_sketch.png"} alt="Hacklag logo" />
            <div style={styles.socialBar}>
              <img style={styles.socialLogo} src={"/img/icons/discourse.png"} alt="Discourse logo" />
              <img style={styles.socialLogo} src={"/img/icons/slack.png"} alt="Slack logo" />
            </div>
          </div>
          <div style={styles.contentBar}>
            Hacklag is the name of the first Hackerspace in Białystok.<br/><br/>
            To be part of this initiative or just be up to date with the progress
            please type your email and we will send you invitation to our
            forum and chat.
            Demonstrating size and engagement of the community is
            extremly important to gather founds and make this thing real -
            please sign in!

            <TextField
              floatingLabelText='Your Email'
              value={this.state.textFieldValue}
              type='email'
            /><br/>
            <RaisedButton
              style={styles.inviteButton}
              label='Cool, let me in!'
            />
          </div>
        </div>
      </div>
    );
  }
}));
