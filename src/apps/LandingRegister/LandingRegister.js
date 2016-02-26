import React from 'react';
import Radium from 'radium';
import {TextField, RaisedButton} from 'material-ui';
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
        marginTop: 68,
        justifyContent: 'center'
      },
      contentBar: {
        marginLeft: 79
      },
      content: {
        maxWidth: 427,
        fontFamily: 'Raleway',
        fontWeight: 300,
        lineHeight: 1.3,
        textAlign: 'justify',
        fontSize: 15
      },
      hacklagLogo: {
        width: 324,
        height: 324,
        padding: 20
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -74,
        top: -404,
        width: 119,
        height: 77
      },
      inviteButton: {
        width: 175,
        marginTop: 24,
        marginBottom: 24
      },
      headlineText: {
        fontSize: 23,
        textAlign: 'justify',
        lineHeight: '23px'
      },
      headerText: {
        fontSize: 22,
        lineHeight: 1.1
      },
      smallText: {
        fontSize: 12,
        lineHeight: 1.8
      },
      mainTextContainer: {
        marginBottom: 10
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
      <div style={styles.content}>
        <div style={styles.mainTextContainer}>
          <div style={styles.headerText}>
            <strong>Hacklag</strong> is a <strong>community</strong> aiming to connect developers, designers,
            entrepreneurs and everyone interested <strong>in new technologies</strong>
            <br/>
            <br/>
            We are also hope to start first <strong>Hackerspace</strong> in <strong>Białystok</strong>
            <br/>
            <br/>
          </div>
          We are <strong>working hard</strong> to make it real. To be part of this initiative
          or just to be <strong>up to date</strong> with the progress please type in your email
          and we will send you an invitation to our <strong>Forum</strong> and <strong>Chat</strong>.
          <br/>
          <br/>
          Demonstrating size and <strong>engagement</strong> of the <strong>community</strong> is
          <strong>extremely</strong> important to gather founds and start operating -
          <strong>please sign up!</strong>
        </div>
        <div>
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
        </div>
        <div style={styles.smallText}>
          On our forum, you can find information for <strong>members, volunteers, partners,
          sponsors</strong>. We are sharing there information about the potential property and the
          whole process of adopting place for <strong>Hacklag</strong>.
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
