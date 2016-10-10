import React, { Component, PropTypes } from 'react';
import { observer, extendObservable, asMap } from 'utils';
import coercer from 'coercer';
import ZSchema from 'z-schema';
import * as FormRules from './formize.rules';

export function formize({ formName, fields, schema = {}, permament = true }) {
  const validator = new ZSchema({
    customValidator: (Report, Schema, Values) => {
      Object.keys(FormRules).forEach(rule => FormRules[rule](Report, Schema, Values));
    },
  });

  return function wrapWithFields(ComposedComponent) {
    @observer
    class Form extends Component {
      static propTypes = {
        services: PropTypes.object,
        store: PropTypes.object,
      }

      static contextTypes = {
        services: PropTypes.object,
        store: PropTypes.object,
      }

      constructor(props, context) {
        super(props, context);

        if (!formName && permament) {
          throw new Error('Property "formName" is required');
        }

        if (!context.store.forms) {
          extendObservable(context.store, { forms: asMap(new Map()) });
        }

        const form = {
          fields: {},
          errors: {},
          schema,
        };

        switch (typeof fields) {
          case 'function':
            form.fields = fields({ ...props, ...context }); break;
          case 'object':
            form.fields = fields; break;
          default:
            throw new Error('Property "fields" is required and must be function or object');
        }

        form.fields = Object
          .keys(form.fields)
          .reduce((obj, name) => ({
            ...obj,
            [name]: {
              name,
              value: '',
              onChange: (e) => this.setValue(e),
              ...form.fields[name],
            },
          }), {});

        if (!context.store.forms[formName] || !permament) {
          context.store.forms.set(formName, form);
        }

        this.form = context.store.forms.get(formName);
        this.submit = this.submit.bind(this);
        this.setValue = this.setValue.bind(this);
      }

      setValue(event, val) {
        const isObject = typeof event === 'object';
        const isCheckbox = event.target && event.target.type === 'checkbox';

        const name = isObject ? event.target.name : event;
        const value = isObject ? event.target.value : val;
        const checked = isObject && isCheckbox ? coercer(event.target.checked) : undefined;

        this.form.fields[name].value = coercer(value);

        if (checked !== undefined) {
          this.form.fields[name].checked = checked;
        }
      }

      submit(event, cb) {
        event.preventDefault(cb);

        // Get object with fieldName: fieldValue items.
        const data = Object
          .keys(this.form.fields)
          .reduce((obj, name) => ({
            ...obj,
            [name]:
              this.form.fields[name].hasOwnProperty('checked') ? this.form.fields[name].checked :
              this.form.fields[name].hasOwnProperty('value') ? this.form.fields[name].value :
              this.form.fields[name].defaultValue,
          }), {});

        const coercedData = coercer(data);

        if (!this.form.schema.length) {
          cb(coercedData, event);
        } else {
          const isValid = validator.validate(data, this.form.schema);
          const errors = validator.getLastErrors();

          this.form.errors = {};

          if (errors) {
            errors.forEach(({ path, message }) => (this.form.errors[path.substr(2)] = message));
          }

          if (isValid) {
            cb(coercedData, event);
          }
        }
      }

      render() {
        return React.createElement(observer(ComposedComponent), {
          ...this.props,
          formize: {
            fields: this.form.fields,
            errors: this.form.errors,
            submit: this.submit,
            setValue: this.setValue,
          },
        });
      }
    }

    return Form;
  };
}
