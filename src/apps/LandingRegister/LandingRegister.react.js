import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton} from 'material-ui';

export default Radium(React.createClass({
  displayName: 'LandingRegister',

  getInitialState() {
    return {
      textFieldValue: '',
      hover: false
    };
  },

  getStyles() {
    return {
      componentBody: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: 24,
        justifyContent: 'center',
        paddingTop: 76
      },
      logoBar: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 324
      },
      contentBar: {
        display: 'flex',
        flexDirection: 'column',
        width: 554,
        paddingLeft: 38
      },
      hacklagLogo: {
        width: 324,
        height: 324,
        padding: 20
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -76,
        top: -404,
        width: 164,
        height: 114
      },
      socialBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        marginTop: -24
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
      },
      hacklagLogoDivHidden: {
        visibility: 'hidden',
        opacity: 0,
        transition: 'visibility 2s, opacity 2s linear'
      },
      hacklagLogoDivVisible: {
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.5s, opacity 1s linear'
      }
    };
  },

  mouseOver() {
    this.setState({hover: true});
  },

  mouseOut() {
    this.setState({hover: false});
  },

  render() {
    let styles = this.getStyles();

    return (
        <div style={styles.componentBody}>
          <div style={styles.logoBar}>
            <a href="#">
              <img style={styles.hacklagLogo}
                src={"/img/hacklag_sketch.png"}
                onMouseOver={this.mouseOver}
                onMouseOut={this.mouseOut}
                alt="Hacklag logo" />
            </a>
            <div style={styles.socialBar}>
              <a href="https://forum.hacklag.org/">
                <img style={styles.socialLogo}
                  src={"/img/icons/discourse.png"}
                  alt="Discourse logo" />
              </a>
              <a href="https://hacklag.slack.com/">
                <img style={styles.socialLogo}
                  src={"/img/icons/slack.png"}
                  alt="Slack logo" />
              </a>
            </div>
            <div style={this.state.hover ? styles.hacklagLogoDivVisible : styles.hacklagLogoDivHidden}>
                  <img style={styles.hacklagLogoDialog}
                    src={"/img/hackbat_hi.png"}
                    alt="Hi! I`m Hackabat!" />
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
    );
  }
}));
