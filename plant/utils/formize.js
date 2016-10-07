import React, { Component } from 'react';
import { observer, observable } from 'utils';
import coercer from 'coercer';
import ZSchema from 'z-schema';
import * as FormRules from './formize.rules';

export function formize({ fields = [], schema = {} }) {
  const validator = new ZSchema({
    customValidator: (Report, Schema, Values) => {
      Object.keys(FormRules).forEach(rule => FormRules[rule](Report, Schema, Values));
    },
  });

  return function wrapWithFields(ComposedComponent) {
    @observer
    class Form extends Component {
      static propTypes = {
        store: React.PropTypes.object,
      }

      static contextTypes = {
        store: React.PropTypes.object,
      }

      static formName;

      constructor(props, context) {
        super(props, context);
        this.submit = this.submit.bind(this);
        this.setValue = this.setValue.bind(this);

        this.formName = ComposedComponent.formName;

        if (!this.formName) {
          throw new Error('Formized components must provide static property: formName');
        }

        this.schema = schema;
        this.fields = typeof fields === 'function' ? fields({ ...props, ...context }) : fields;
        this.fields = this.fields.reduce((obj, item) => ({
          ...obj,
          [item.name]: item,
        }), {});
      }

      setValue(event, val) {
        const isObject = typeof event === 'object';
        const isCheckbox = event.target.type === 'checkbox';

        const name = isObject ? event.target.name : event;
        const value = isObject ? event.target.value : val;
        const checked = isObject && isCheckbox ? coercer(event.target.checked) : undefined;

        this.fields[name].value = coercer(value);

        if (checked !== undefined) {
          this.fields[name].checked = checked;
        }
      }

      submit(event, cb) {
        event.preventDefault(cb);

        // Get object with fieldName: fieldValue items.
        const data = Object.keys(this.fields).reduce((obj, key) => ({
          ...obj,
          [key]:
            this.fields[key].hasOwnProperty('checked') ? this.fields[key].checked :
            this.fields[key].hasOwnProperty('value') ? this.fields[key].value :
            this.fields[key].defaultValue,
        }), {});

        if (!this.schema.length) {
          cb(event, coercer(data));
        } else {
          const isValid = validator.validate(data, this.schema);
          const errors = validator.getLastErrors();

          this.errors = {};

          if (errors) {
            errors.forEach(({ path, message }) => (this.errors[path.substr(2)] = message));
          }

          if (isValid) {
            cb(event, coercer(data));
          }
        }
      }

      @observable errors = {};
      @observable fields = {};

      render() {
        return (
          <ComposedComponent
            {...this.props}
            form={{
              fields: this.fields,
              errors: this.errors,
              submit: this.submit,
              setValue: this.setValue,
            }}
          />
        );
      }
    }

    return Form;
  };
}
