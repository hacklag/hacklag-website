import Reflux from 'reflux';

import Mixins from '../../mixins';

import SessionActions from '../Session/SessionActions';
import BillingPlanActions from './ProfileBillingPlanActions';
import Actions from './ProfileBillingPlanDialogActions';

export default Reflux.createStore({
  listenables: Actions,
  mixins: [
    Mixins.StoreForm,
    Mixins.DialogStore,
    Mixins.WaitForStore
  ],

  init() {
    this.data = {};
    this.waitFor(
      SessionActions.setUser,
      this.refreshData
    );
    this.listenToForms();
  },

  refreshData() {
    console.debug('ProfileBillingPlanDialogStore::refreshData');
    Actions.fetchBillingPlans();
    Actions.fetchBillingSubscriptions();
  },

  getInfo(type) {
    let info = {
      included: 0,
      overage: 0,
      total: 0
    };

    if (!this.data.plan) {
      return info;
    }

    let pricing = this.data.plan.pricing[type];
    let options = this.data.plan.options[type];
    let sliderValue = this.data[type + 'Selected'];

    if (!sliderValue) {
      info = pricing[Object.keys(pricing)[0]];
      info.total = Object.keys(pricing)[0];
      return info;
    }

    let value = String(parseFloat(sliderValue));

    info = pricing[options[value]];
    info.total = options[value];
    return info;
  },

  setPlans(plans) {
    this.data.plan = plans[Object.keys(plans)[0]];
  },

  onSliderChange(type, event, value) {
    this.data[type + 'Selected'] = value;
    this.trigger(this.data);
  },

  onSliderLabelsClick(value, type) {
    this.data[type + 'Selected'] = value;
    this.trigger(this.data);
  },

  setLimits() {
    Actions.updateBillingProfile({
      hard_limit: parseInt(this.data.total * 3, 10),
      soft_limit: parseInt(this.data.total * 1.5, 10)
    });
  },

  subscribe() {
    Actions.subscribePlan(this.data.plan.name, {
      commitment: JSON.stringify({
        api: this.data.apiTotal,
        cbx: this.data.cbxTotal
      })
    });
  },

  onSubmitPlan(cardInfo) {
    this.data.apiTotal = this.getInfo('api').total;
    this.data.cbxTotal = this.getInfo('cbx').total;

    this.data.total = parseInt(this.data.apiTotal, 10) + parseInt(this.data.cbxTotal, 10);

    if (this.data.card) {
      this.subscribe();
    } else {
      Actions.updateCard(cardInfo);
    }
  },

  onFetchBillingPlansCompleted(payload) {
    this.isLoading = false;
    this.setPlans(payload);
  },

  onFetchBillingCardCompleted(payload) {
    this.data.card = payload;
    this.data.isLoading = false;
    this.trigger(this.data);
  },

  onFetchBillingCardFailure() {
    this.data.isLoading = false;
    this.data.card = null;
    this.trigger(this.data);
  },

  onSubscribePlan() {
    this.data.isLoading = true;
    this.trigger(this.data);
  },

  onSubscribePlanCompleted() {
    this.setLimits();
    BillingPlanActions.fetch();
    this.trigger(this.data);
  },

  onSubscribePlanFailure() {
    this.data.isLoading = false;
    this.trigger(this.data);
  },

  onUpdateCard() {
    this.data.isLoading = true;
    this.trigger(this.data);
  },

  onUpdateCardCompleted() {
    this.subscribe();
  },

  onUpdateCardFailure() {
    this.data.isLoading = false;
    this.trigger(this.data);
  },

  onUpdateBillingProfileCompleted() {
    this.trigger(this.data);
  },

  onUpdateBillingProfileFailure() {
    this.data.isLoading = false;
    this.trigger(this.data);
  }
});
