import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton, IconButton, Colors} from 'material-ui';
import LinkedStateMixin from 'react-addons-linked-state-mixin';
import LeftBar from './LeftBar';

export default Radium(React.createClass({
  displayName: 'LandingRegister',

  mixins: [LinkedStateMixin],

  getInitialState() {
    return {
      emailAddress: '',
      registerState: null
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
        width: '50%',
        marginTop: 16,
        marginBottom: 16
      },
      headlineText: {
        fontSize: 18
      },
      smallerText: {
        fontSize: 12
      }
    };
  },

  handleButtonPress() {
    this.setState({
      registerState: true
    });
  },

  contentForm() {
    const styles = this.getStyles();

    return (
      <div style={styles.contentBar}>
        <div style={styles.headlineText}>
          We hope to start first <strong><ins>Hackerspace</ins></strong> in <strong>Białystok</strong>
          <br/>
          <br/>
        </div>
        <div>
          We are <strong>working hard</strong> to make it real. To be part of this <strong>initiative </strong>
          or just to be <strong>up to date</strong> with the progress please type in your email
          and we will send you an invitation to our <strong>Forum</strong> and <strong>Chat</strong>.
          <br/>
          <br/>

          Demonstrating size and engagement of the <strong>community</strong> is
          <strong> extremely</strong> important to gather founds and start operating -
          please sign up!
          <br/>
          <br/>

          <TextField
            floatingLabelText="Your Email"
            style={styles.emailTextfield}
            type="email"
            fullWidth={true}
            valueLink={this.linkState('emailAddress')} />
          <RaisedButton
            style={styles.inviteButton}
            primary={true}
            onClick={this.handleButtonPress}
            label="Cool, let me in!" />
          <div style={styles.smallerText}>
            On our forum, you can find information for <strong>members, volunteers, partners,
            sponsors</strong>. We are sharing there information about the potential property and the
            whole process of adopting place for <strong>Hacklag</strong>.
          </div>
        </div>
      </div>
    );
  },

  contentSuccess() {
    return (
      <div>
        Invitation was successfull!
      </div>
    );
  },

  contentFailure() {
    return (
      <div>
        Invitation was declined! Contact support!
      </div>
    );
  },

  renderContent() {
    const {registerState} = this.state;

    if (registerState) {
      return this.contentSuccess();
    }

    if (registerState === false) {
      return this.contentFailure();
    }

    return this.contentForm();
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <LeftBar/>
        <div style={styles.contentBar}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}));
