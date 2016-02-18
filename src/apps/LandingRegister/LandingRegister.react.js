import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton, IconButton, Colors} from 'material-ui';

import LeftBar from './LeftBar.react';

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
        paddingLeft: 38,
        fontSize: 14
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
      inviteButton: {
        backgroundColor: '#ec018c',
        width: '50%'
      },
      headlineText: {
        fontSize: 18
      },
      smallerText: {
        fontSize: 12
      }
    };
  },

  handleTextFieldChange(event) {
    this.setState({
      textFieldValue: event.target.value
    });
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <LeftBar/>
        <div style={styles.contentBar}>
          <div style={styles.headlineText}>
            We hope to start first <strong><ins>Hackerspace</ins></strong> in <strong>Białystok</strong><br/><br/>
          </div>
          <p>
            We are <strong>working hard</strong> to make it real. To be part of this <strong>initiative</strong>
            or just be <strong>up to date</strong> with the progress please type in your email
            and we will send you invitation to <strong>our Forum</strong> and <strong>Chat</strong>.<br/><br/>

            Demonstrating size and engagement of the <strong>community</strong> is
            <strong> extremly</strong> important to gather founds and start operating -
            please sign up!

            <TextField
              floatingLabelText='Your Email'
              style={styles.emailTextfield}
              value={this.state.textFieldValue}
              type='email'
              onChange={this.handleTextFieldChange}
            /><br/>
            <RaisedButton
              style={styles.inviteButton}
              primary={true}
              label='Cool, let me in!'
            /><br/>
            <div style={styles.smallerText}>
              On our forum you can find information for <strong>members, volunteers, partners,
              sponsors</strong>. We are sharing there information about potential property and the
              whole process of adopting place for <strong>Hacklag</strong>.
            </div>
          </p>
        </div>
        </div>
    );
  }
}));
