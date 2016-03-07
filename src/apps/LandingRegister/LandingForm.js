import React from 'react';
import Radium from 'radium';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import {RaisedButton} from 'material-ui';
import Syncano from 'syncano';

export default Radium(React.createClass({
  propTypes: {
    onFormSubmit: React.PropTypes.element.isRequired
  },

  getInitialState() {
    return {
      canSubmit: false
    };
  },

  getStyles() {
    return {
      inviteButton: {
        width: 190,
        marginBottom: 24
      },
      buttonLabelStyle: {
        fontSize: 16
      }
    };
  },

  submitForm(model) {
    const {Webhook} = Syncano({accountKey: SYNCANO_API_KEY});
    const COMMUNITY_REGISTER_WEBHOOK = '95f37de28a7f95f07b2128677e97d116fcf8813b';
    const payload = JSON.stringify({email: model.email});

    Webhook.please().runPublic({
      instanceName: SYNCANO_INSTANCE_NAME,
      public_link: COMMUNITY_REGISTER_WEBHOOK},
      {payload}
    ).then((trace) => {
      const data = JSON.parse(trace.result.stdout);

      this.props.onFormSubmit(data.status);
    });
  },

  render() {
    const styles = this.getStyles();

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
          fullWidth={true} />
        <RaisedButton
          style={styles.inviteButton}
          labelStyle={styles.buttonLabelStyle}
          primary={true}
          label="Cool, let me in!"
          onClick={() => this.refs.form.validateForm()}
          type="submit" />
      </Form>
    );
  }
}));
