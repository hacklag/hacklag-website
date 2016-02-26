import React from 'react';
import Radium from 'radium';
import {RaisedButton} from 'material-ui';
import LeftBar from './LeftBar';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';

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
        paddingTop: 63,
        justifyContent: 'center'
      },
      contentBar: {
        marginLeft: 40
      },
      contentText: {
        width: 554
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
      inviteButton: {
        width: '50%',
        marginTop: 16,
        marginBottom: 16
      },
      headlineText: {
        fontSize: 23,
        textAlign: 'justify',
        lineHeight: '23px'
      },
      smallerText: {
        fontSize: 12
      }
    };
  },

  submitForm(model) {
    console.log('Model: ', model);
    this.setState({registerState: true});
  },

  contentForm() {
    const styles = this.getStyles();

    return (
      <div style={styles.contentText}>
        <div style={styles.headlineText}>
          <strong>Hacklag</strong> is a <strong>community</strong> aiming to connect developers, designers,
          entrepreneurs and everyone interested <strong>in new technologies</strong>
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
              primary={true}
              label="Cool, let me in!"
              onClick={() => this.refs.form.validateForm()}
              type="submit" />
          </Form>
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
