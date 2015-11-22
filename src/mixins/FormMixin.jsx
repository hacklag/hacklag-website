import React from 'react';
import ReactLink from 'react/lib/ReactLink';
import ReactStateSetters from 'react/lib/ReactStateSetters';
import _ from 'lodash';
import validate from 'validate.js';

import Notification from '../common/Notification/Notification.react';

validate.moment = require('moment');


export default {
  linkState(key) {
    // We don't want to call render here
    if (_.isArray(this.state._formLinkedKeys) && _.indexOf(this.state._formLinkedKeys, key) === -1) {
      this.state._formLinkedKeys.push(key);
    }

    return new ReactLink(
      this.state[key],
      ReactStateSetters.createStateKeySetter(this, key)
    );
  },

  getInitialState() {
    return this.getInitialFormState();
  },

  getInitialFormState() {
    return {
      _formLinkedKeys: [],
      errors: {},
      feedback: null,
      canSubmit: true
    };
  },

  renderFormErrorFeedback() {
    if (!this.state.errors || typeof this.state.errors.feedback === 'undefined') {
      return false;
    }

    return <Notification type="error">{this.state.errors.feedback}</Notification>;
  },

  renderFormFeedback() {
    if (!this.state.feedback || typeof this.state.feedback === 'undefined') {
      return false;
    }

    return <Notification>{this.state.feedback}</Notification>;
  },

  renderFormNotifications() {
    return this.renderFormErrorFeedback() || this.renderFormFeedback();
  },

  resetForm() {
    this.setState(this.getInitialFormState());
  },

  getFormAttributes() {
    if (_.size(this.state._formLinkedKeys) === 0) {
      return this.state;
    }

    let refMethods = [
      'getValue',
      'getDate',
      'getTime',
      'isChecked'
    ];

    let attributes = _.reduce(this.state._formLinkedKeys, (result, key) => {
      let ref = this.refs[key];
      let value = this.state[key];

      if (!_.isEmpty(ref)) {
        let methodName = _.find(refMethods, (name) => _.isFunction(ref[name]));

        if (methodName) {
          value = value || ref[methodName]();
        }
      }

      if (!_.isEmpty(value)) {
        result[key] = value;
      }

      return result;
    }, {});

    return _.defaults(attributes, this.state);
  },

  validate(key, callback) {
    if (typeof key === 'function') {
      /* eslint-disable */
      callback = key;
      key = null;
      /* eslint-enable */
    }

    let constraints = _.get(this, 'validatorConstraints', {});
    let attributes = _.get(this, 'getValidatorAttributes', this.getFormAttributes());

    if (_.isFunction(constraints)) {
      constraints = constraints.call(this);
    }

    if (_.isFunction(attributes)) {
      attributes = attributes.call(this);
    }

    if (key !== null) {
      let keyConstraints = {};
      let keyAttributes = {};

      keyConstraints[key] = constraints[key];
      constraints = keyConstraints;
      keyAttributes[key] = attributes[key];
      attributes = keyAttributes;
    }

    let errors = _.assign(
      {},
      (key !== null) ? this.state.errors : {},
      validate(attributes, constraints)
    );

    this.setState({errors}, this._invokeCallback.bind(this, key, callback));
  },

  handleFormValidation(event) {
    if (event) {
      event.preventDefault();
    }

    if (typeof this.state.canSubmit !== 'undefined' && this.state.canSubmit === false) {
      return;
    }

    this.validate((isValid, errors) => {
      if (isValid === true) {
        if (_.isFunction(this.handleSuccessfullValidation)) {
          this.handleSuccessfullValidation(this.getFormAttributes());
        }
      } else if (_.isFunction(this.handleFailedValidation)) {
        this.handleFailedValidation(errors);
      }
    });
  },

  handleValidation(key, callback) {
    return (event) => {
      if (event) {
        event.preventDefault();
      }
      this.validate(key, callback);
    };
  },

  getValidationMessages(key = null) {
    let errors = this.state.errors || {};

    if (_.size(errors) === 0) {
      return [];
    }

    if (key === null) {
      return _.reduce(errors, (result, value) => result.concat(value), []);
    }

    return _.get(errors, key, []);
  },

  clearValidations() {
    this.setState({
      errors: {}
    });
  },

  isInputDisabled(inputName) {
    let hasProtectedFromEditProperty = this.state.protectedFromEdit;

    if (hasProtectedFromEditProperty && hasProtectedFromEditProperty.fields) {
      return hasProtectedFromEditProperty.fields.indexOf(inputName) > -1;
    }
    return false;
  },

  isValid(key = null) {
    if (key === null) {
      return _.size(this.state.errors) === 0;
    }
    return _.isEmpty(this.state.errors[key]);
  },

  _invokeCallback(key = null, callback = null) {
    if (!_.isFunction(callback)) {
      return;
    }

    callback(this.isValid(key), (key !== null) ? this.state.errors[key] : this.state.errors);
  }

};
