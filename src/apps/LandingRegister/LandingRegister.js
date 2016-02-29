import React from 'react';
import Radium from 'radium';
import {RaisedButton, FontIcon} from 'material-ui';
import LeftBar from './LeftBar';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import {ShareButtons} from 'react-share';

export default Radium(React.createClass({
  displayName: 'LandingRegister',

  getInitialState() {
    return {
      registerState: null,
      canSubmit: false
    };
  },

  getStyles() {
    return {
      componentBody: {
        display: 'flex',
        justifyContent: 'center'
      },
      contentBar: {
        marginLeft: 72,
        '@media (max-width: 750px)': {
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 16
        }
      },
      content: {
        maxWidth: 450,
        fontFamily: 'Raleway',
        fontWeight: 300,
        lineHeight: 1.6,
        textAlign: 'justify',
        fontSize: 16
      },
      inviteButton: {
        width: 190,
        marginBottom: 24
      },
      buttonLabelStyle: {
        fontFamily: 'Roboto',
        fontSize: 16
      },
      headerText: {
        fontSize: 22,
        lineHeight: 1.1,
        marginBottom: 24
      },
      smallText: {
        fontSize: 12,
        lineHeight: 1.8
      },
      mainTextContainer: {
        marginBottom: 10
      },
      emailTextfield: {
        marginBottom: 24
      },
      confirmBody: {
        width: 450,
        fontSize: 19,
        lineHeight: 1.1,
        color: '#4a4a4a',
        textAlign: 'justify'
      },
      confirmTwitterButtonStyle: {
        width: 210,
        marginRight: 30
      },
      confirmFacebookButtonStyle: {
        width: 210
      },
      confirmButtonLabelStyle: {
        fontWeight: 'bold'
      },
      confirmShareButtonStyle: {
        display: 'inline'
      },
      confirmFooterStyle: {
        margin: 'auto',
        width: 230
      }
    };
  },

  submitForm(model) {
    console.debug('Model: ', model);
    this.setState({registerState: true});
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
          </div>
          We are <strong>working hard</strong> to make it real. To be part of this initiative
          or just to be <strong>up to date</strong> with the progress please type in your email
          and we will send you an invitation to our <strong>Forum</strong> and <strong>Chat</strong>.
          <br/>
          <br/>
          Demonstrating size and <strong>engagement</strong> of the <strong>community</strong> is
          <strong> extremely</strong> important to gather founds and start operating -
          <strong>please sign up!</strong>
        </div>
          <Form
            ref="form"
            onValid={() => this.setState({canSubmit: true})}
            onInvalid={() => this.setState({canSubmit: false})}
            onValidSubmit={this.submitForm}
            noValidate>
            <FormsyText
              name="email"
              validations="isEmail"
              validationError="You have to type valid email"
              floatingLabelText="Your Email"
              required={true}
              fullWidth={true} />
            <RaisedButton
              style={styles.inviteButton}
              labelStyle={styles.buttonLabelStyle}
              primary={true}
              label="Cool, let me in!"
              onClick={() => this.refs.form.validateForm()}
              type="submit" />
          </Form>
        <div style={styles.smallText}>
          On our forum, you can find information for <strong>members, volunteers, partners,
          sponsors</strong>. We are sharing there information about the potential property and the
          whole process of adopting place for <strong>Hacklag</strong>.
        </div>
      </div>
    );
  },

  contentSuccess() {
    const {FacebookShareButton, TwitterShareButton} = ShareButtons;
    const pageUrl = 'http://hacklag.org/';
    const pageTitle = 'Hacklag';
    const styles = this.getStyles();

    return (
      <div style={styles.confirmBody}>
        <div style={styles.headlineText}>
          <strong>Thank you for signing up</strong>
          <br/>
          <br/>
        </div>
        <div>
          Please check your inbox to find invitation for <strong>Chat</strong> and <strong>Forum</strong>.
          In the meantime please help us spread the word and share some info on social media:
          <br/>
          <br/>
          <br/>
        </div>
        <div>
          <TwitterShareButton
            title={pageTitle}
            url={pageUrl}
            style={styles.confirmShareButtonStyle}>
            <RaisedButton
              label="TWITTER"
              labelPosition="after"
              style={styles.confirmTwitterButtonStyle}
              backgroundColor="#0693E3"
              labelColor="white"
              labelStyle={styles.confirmButtonLabelStyle}
              icon={
                <FontIcon className="icon-twitter"/>
              } />
          </TwitterShareButton>
          <FacebookShareButton
            title={pageTitle}
            url={pageUrl}
            style={styles.confirmShareButtonStyle}>
            <RaisedButton
              label="FACEBOOK"
              labelPosition="after"
              style={styles.confirmFacebookButtonStyle}
              backgroundColor="#425CAE"
              labelColor="white"
              labelStyle={styles.confirmButtonLabelStyle}
              icon={
                <FontIcon className="icon-facebook-box"/>
              } />
          </FacebookShareButton>
        </div>
        <br/>
        <div style={styles.confirmFooterStyle}>
          Thank you for your help!
        </div>
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
