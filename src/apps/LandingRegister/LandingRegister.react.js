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
        display: 'flex',
        flexDirection: 'row',
        fontSize: 24,
        justifyContent: 'center',
        paddingTop: 194
      },
      develBackgroundImage: {
        backgroundImage: 'url(/img/form.png)',
        backgroundSize: '100%'
      },
      logoBar: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 324
      },
      contentBar: {
        border: '1px solid green',
        display: 'flex',
        flexDirection: 'column',
        width: 554,
        paddingLeft: 38
      },
      hacklagLogo: {
        width: 314,
        height: 314,
        margin: 20
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -54,
        top: -364,
        width: 144,
        height: 94
      },
      socialBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex'
      },
      socialLogo: {
        width: 48,
        height: 48,
        margin: 12
      },
      inviteButton: {
        backgroundColor: '#ec018c',
        width: '50%'
      },
      smallerText: {
        fontSize: 14
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.develBackgroundImage}>
        <div style={styles.componentBody}>
          <div style={styles.logoBar}>
            <img style={styles.hacklagLogo} src={"/img/hacklag_sketch.png"} alt="Hacklag logo" />
            <img style={styles.hacklagLogoDialog} src={"/img/hackbat_hi.png"} alt="Hi! I`m Hackabat!" />
            <div style={styles.socialBar}>
              <img style={styles.socialLogo} src={"/img/icons/discourse.png"} alt="Discourse logo" />
              <img style={styles.socialLogo} src={"/img/icons/slack.png"} alt="Slack logo" />
            </div>
          </div>
          <div style={styles.contentBar}>
            We hope to start first Hackerspace in Białystok<br/><br/>
            We are working hard to make it real. To be part of this initiative
            or just be up to date with the progress please type in your email
            and we will send you invitation to our Forum and Chat.<br/><br/>
            Demonstrating size and engagement of the community is
            extremly important to gather founds and start operating -
            please sign up!

            <TextField
              floatingLabelText='Your Email'
              style={styles.emailTextfield}
              value={this.state.textFieldValue}
              type='email'
            /><br/>
            <RaisedButton
              style={styles.inviteButton}
              primary={true}
              label='Cool, let me in!'
            /><br/>
            <div style={styles.smallerText}>
              On our forum you can find information for members, volunteers, partners,
              sponsors. We are sharing there information about potential property and the
              whole process of adopting place for Hacklag.
            </div>
          </div>
        </div>
      </div>
    );
  }
}));
