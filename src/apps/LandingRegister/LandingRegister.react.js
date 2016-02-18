import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton, IconButton} from 'material-ui';

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
        fontSize: 18
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
      smallerText: {
        fontSize: 12
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <LeftBar/>
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
