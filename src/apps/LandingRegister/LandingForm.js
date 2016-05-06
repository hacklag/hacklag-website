import React from 'react';
import Radium from 'radium';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import {RaisedButton, CircularProgress} from 'material-ui';
import Syncano from 'syncano';

export default Radium(React.createClass({
  propTypes: {
    onFormSubmit: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      canSubmit: false,
      progressVisible: false
    };
  },

  getStyles() {
    return {
      inviteButton: {
        width: 210,
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26), 0 2px 10px rgba(0, 0, 0, 0.16)'
      },
      buttonLabelStyle: {
        fontSize: 16
      },
      progressCircleVisible: {
        display: 'flex',
        margin: -7
      },
      progressCircleHidden: {
        display: 'none',
        margin: -7
      },
      submitBox: {
        display: 'flex',
        marginBottom: 24
      },
      formInputStyle: {
        marginBottom: 24
      }
    };
  },

  submitForm(model) {
    const {ScriptEndpoint} = Syncano({accountKey: SYNCANO_API_KEY});
    const COMMUNITY_REGISTER_WEBHOOK = '95f37de28a7f95f07b2128677e97d116fcf8813b';
    const COMMUNITY_REGISTER_NAME = 'communityregistration_endpoint';
    const payload = JSON.stringify({email: model.email});

    this.setState({progressVisible: true});

    ScriptEndpoint.please().runPublic({
      instanceName: SYNCANO_INSTANCE_NAME,
      public_link: COMMUNITY_REGISTER_WEBHOOK,
      name: COMMUNITY_REGISTER_NAME},
      {payload}
    ).then((trace) => {
      const data = JSON.parse(trace.result.stdout);

      this.props.onFormSubmit(data);
    });
  },

  render() {
    const styles = this.getStyles();
    let {progressVisible} = this.state;

    return (
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
          style={styles.formInputStyle}
          fullWidth={true} />
        <div style={styles.submitBox}>
          <RaisedButton
            style={styles.inviteButton}
            labelStyle={styles.buttonLabelStyle}
            primary={true}
            label="I want to join!"
            onClick={() => this.refs.form.validateForm()}
            type="submit" />
          <CircularProgress
            style={progressVisible ? styles.progressCircleVisible : styles.progressCircleHidden}
            size={0.4} />
        </div>
      </Form>
    );
  }
}));
