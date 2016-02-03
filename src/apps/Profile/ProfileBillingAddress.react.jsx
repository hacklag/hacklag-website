import React from 'react';
import Reflux from 'reflux';
import _ from 'lodash';

import FormMixin from '../../mixins/FormMixin';

import Actions from './ProfileActions';
import Store from './ProfileBillingAddressStore';

import MUI from 'material-ui';

export default React.createClass({

  displayName: 'ProfileBillingAddress',

  mixins: [
    Reflux.connect(Store),
    FormMixin
  ],

  validatorConstraints: {
    company_name: {
      length: {maximum: 150}
    },
    first_name: {
      length: {maximum: 35},
      format: {
        pattern: /^([a-zA-Z]+)$/i,
        message: 'can contain only alphabetical characters'
      }
    },
    last_name: {
      length: {maximum: 35},
      format: {
        pattern: /^([a-zA-Z -]+)$/i,
        message: 'can contain only alphabetical characters'
      }
    },
    address_line1: {
      length: {
        maximum: 150,
        message: '^Address is too long (maximum is 150 characters)'
      },
      format: {
        pattern: /^([a-zA-Z0-9 ,./\\-]+)$/i,
        message: '^Address is invalid'
      }
    },
    address_line2: {
      length: {
        maximum: 150,
        message: '^Address is too long (maximum is 150 characters)'
      },
      format: {
        pattern: /^([a-zA-Z0-9 ,./\\-]+)$/i,
        message: '^Address is invalid'
      }
    },
    address_city: {
      length: {
        maximum: 100,
        message: '^City is too long (maximum is 100 characters)'
      },
      format: {
        pattern: /^([a-zA-Z -]+)$/i,
        message: '^City can contain only alphabetical characters'
      }
    },
    address_state: {
      length: {
        maximum: 100,
        message: '^State  is too long (maximum is 100 characters)'
      },
      format: {
        pattern: /^([a-zA-Z -]+)$/i,
        message: '^State can contain only alphabetical characters'
      }
    },
    address_zip: {
      length: {
        maximum: 10,
        message: '^Zip code is too long (maximum is 10 characters)'
      },
      format: {
        pattern: /^([a-zA-Z0-9 -]+)$/i,
        message: '^Zip code is invalid'
      }
    },
    address_country: {
      length: {
        maximum: 35,
        message: '^Country is too long (maximum is 35 characters)'
      },
      format: {
        pattern: /^([a-zA-Z -]+)$/i,
        message: '^Country can contain only alphabetical characters'
      }
    },
    tax_number: {
      length: {maximum: 50}
    }
  },

  componentDidMount() {
    Actions.fetchBillingProfile();
  },

  handleSuccessfullValidation() {
    let params = _.omit(this.state, '_formLinkedKeys');

    Actions.updateBillingProfile(params);
  },

  render() {
    return (
      <div>
        {this.renderFormNotifications()}

        <form
          onSubmit={this.handleFormValidation}
          acceptCharset="UTF-8"
          method="post">
          <div className="row vm-6-b">
            <div className="col-flex-1">
              <MUI.TextField
                name="company_name"
                fullWidth={true}
                valueLink={this.linkState('company_name')}
                defaultValue={this.state.company_name}
                errorText={this.getValidationMessages('company_name').join(' ')}
                hintText="Company name"
                floatingLabelText="Company name"/>
              <MUI.TextField
                valueLink={this.linkState('first_name')}
                defaultValue={this.state.first_name}
                errorText={this.getValidationMessages('first_name').join(' ')}
                name="first_name"
                floatingLabelText="First name"
                hintText="First name"
                fullWidth={true}/>
              <MUI.TextField
                valueLink={this.linkState('last_name')}
                defaultValue={this.state.last_name}
                errorText={this.getValidationMessages('last_name').join(' ')}
                name="last_name"
                floatingLabelText="Last name"
                hintText="Last name"
                fullWidth={true}/>
              <MUI.TextField
                valueLink={this.linkState('tax_number')}
                defaultValue={this.state.tax_number}
                errorText={this.getValidationMessages('tax_number').join(' ')}
                name="tax_number"
                floatingLabelText="Tax number"
                hintText="Tax number"
                fullWidth={true}/>
            </div>
            <div className="col-flex-1">
              <MUI.TextField
                valueLink={this.linkState('address_line1')}
                defaultValue={this.state.address_line1}
                errorText={this.getValidationMessages('address_line1').join(' ')}
                name="address_line1"
                floatingLabelText="Address"
                hintText="Address"
                fullWidth={true}/>
              <MUI.TextField
                valueLink={this.linkState('address_line2')}
                defaultValue={this.state.address_line2}
                errorText={this.getValidationMessages('address_line2').join(' ')}
                name="address_line2"
                floatingLabelText="Address"
                hintText="Address"
                fullWidth={true}/>
              <MUI.TextField
                valueLink={this.linkState('address_country')}
                defaultValue={this.state.address_country}
                errorText={this.getValidationMessages('address_country').join(' ')}
                name="address_country"
                floatingLabelText="Country"
                hintText="Country"
                fullWidth={true}/>
              <MUI.TextField
                valueLink={this.linkState('address_state')}
                defaultValue={this.state.address_state}
                errorText={this.getValidationMessages('address_state').join(' ')}
                name="address_state"
                floatingLabelText="State"
                autoComplete="State"
                hintText="State"
                fullWidth={true}/>

              <div className="row">
                <div className="col-md-15">
                  <MUI.TextField
                    valueLink={this.linkState('address_zip')}
                    defaultValue={this.state.address_zip}
                    errorText={this.getValidationMessages('address_zip').join(' ')}
                    name="address_zip"
                    floatingLabelText="Zip code"
                    hintText="Zip code"
                    fullWidth={true}/>
                </div>
                <div className="col-flex-1">
                  <MUI.TextField
                    valueLink={this.linkState('address_city')}
                    defaultValue={this.state.address_city}
                    errorText={this.getValidationMessages('address_city').join(' ')}
                    name="address_city"
                    floatingLabelText="City"
                    hintText="City"
                    fullWidth={true}/>
                </div>
              </div>
            </div>
          </div>
          <MUI.RaisedButton
            type="submit"
            label="Update"
            className="raised-button"
            secondary={true}/>
        </form>
      </div>
    );
  }
});
