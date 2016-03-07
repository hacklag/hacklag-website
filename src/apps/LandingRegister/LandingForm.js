import React from 'react';
import Radium from 'radium';
import {Form} from 'formsy-react';
import {FormsyText} from 'formsy-material-ui';
import {RaisedButton} from 'material-ui';

export default Radium(React.createClass({
  propTypes: {
    onChildChange: React.PropTypes.element.isRequired
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
    console.debug('Model: ', model.email);
    this.props.onChildChange(true);
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
