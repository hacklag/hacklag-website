import React, { Component } from 'react';
import { observer } from 'utils';
import coercer from 'coercer';
import ZSchema from 'z-schema';
import * as FormRules from './form.rules';

export function form(opts) {
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

        if (typeof opts === 'function') {
          const parsedOpts = opts(props);
          this.fields = parsedOpts.fields;
          this.schema = parsedOpts.schema;
        } else {
          this.fields = opts.fields;
          this.schema = opts.schema;
        }

        this.formName = ComposedComponent.formName ||
                        ComposedComponent.displayName ||
                        ComposedComponent.name;
        this.store = props.store || context.store;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSetValue = this.handleSetValue.bind(this);
      }

      componentWillMount() {
        this.store.formStore.addForm(this.formName, this.fields);
      }

      handleSubmit(event, cb) {
        // Get form fields
        const formFields = this.store.formStore.forms[this.formName].fields;
        // Bind values to field names
        const getKeyValue = (obj, key) => ({
          ...obj,
          [key]:
            this.fields[key].hasOwnProperty('checked') ? this.fields[key].checked :
            this.fields[key].hasOwnProperty('value') ? this.fields[key].value :
            this.fields[key].defaultValue,
        });
        // Get object with fieldName: fieldValue items.
        const data = Object.keys(formFields).reduce(getKeyValue, {});

        const isValid = validator.validate(data, this.schema);
        const errors = validator.getLastErrors();
        const formName = this.formName;

        this.store.formStore.bindErrors(formName, errors);

        if (isValid) {
          cb(event, coercer(data));
        }

        event.preventDefault();
      }

      handleSetValue(event) {
        this.store.formStore.setValue(
          this.formName,
          event.target.name,
          coercer(event.target.value),
          event.target.type === 'checkbox' ? coercer(event.target.checked) : undefined,
        );
      }

      render() {
        const { fields, errors } = this.store.formStore.forms[this.formName];

        return (
          <ComposedComponent
            {...this.props}
            fields={fields}
            errors={errors}
            submit={this.handleSubmit}
            setValue={this.handleSetValue}
          />
        );
      }
    }

    return Form;
  };
}
