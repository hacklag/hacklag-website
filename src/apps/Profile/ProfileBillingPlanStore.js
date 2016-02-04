import Reflux from 'reflux';
import moment from 'moment';
import _ from 'lodash';

import Mixins from '../../mixins';

import SessionActions from '../Session/SessionActions';
import Actions from './ProfileBillingPlanActions';

export default Reflux.createStore({
  listenables: Actions,
  mixins: [
    Mixins.WaitForStore
  ],

  getInitialState() {
    return {
      profile: null,
      usage: null,
      overage: {
        amount: 0
      },
      subscriptions: null,
      isReady: false,
      isLoading: true,
      chartLegend: {
        rows: [],
        showPercents: false
      }
    };
  },

  init() {
    this.data = this.getInitialState();
    this.waitFor(
      SessionActions.setUser,
      this.refreshData
    );
  },

  refreshData() {
    console.debug('ClassesStore::refreshData');

    const join = this.joinTrailing(
      Actions.fetchBillingProfile.completed,
      Actions.fetchBillingUsage.completed,
      Actions.fetchBillingSubscriptions.completed,
      () => {
        join.stop();
        this.data.isReady = true;
        this.data.isLoading = false;
        this.trigger(this.data);
      }
    );

    Actions.fetchBillingProfile();
    Actions.fetchBillingUsage();
    Actions.fetchBillingSubscriptions();
  },

  setProfile(profile) {
    this.data.profile = profile;
    this.data.soft_limit = profile.soft_limit;
    this.data.hard_limit = profile.hard_limit;
  },

  setUsage(usage) {
    this.data.usage = usage;
  },

  setSubscriptions(subscriptions) {
    this.data.subscriptions = subscriptions;
  },

  isPlanCanceled() {
    if (!this.data.subscriptions || this.data.subscriptions.length > 1) {
      return false;
    }
    return this.data.subscriptions._items[0].end || false;
  },

  isNewSubscription() {
    return (this.data.subscriptions && this.data.subscriptions.length > 1);
  },

  getBuilderLimits() {
    return {
      api: {included: '100000'},
      cbx: {included: '1000'}
    };
  },

  getPlan() {
    return this.data.profile.subscription.plan;
  },

  getPlanName() {
    const planDict = {
      builder: 'Builder',
      'paid-commitment': 'Production'
    };

    return planDict[this.getPlan()];
  },


  getLimitsData(subscription, plan) {
    if (plan === 'builder') {
      return this.getBuilderLimits();
    }

    let pricing = null;

    if (!subscription || subscription === 'default') {
      pricing = this.data.profile.subscription.pricing;
    } else {
      pricing = subscription.pricing;
    }

    return ({
      api: {
        included: pricing.api.included,
        overage: pricing.api.overage
      },
      cbx: {
        included: pricing.cbx.included,
        overage: pricing.cbx.overage
      }
    });
  },

  getCovered() {
    let subscription = this.data.profile.subscription;
    let today = new Date();
    let desiredStart = moment(new Date(today.getFullYear(), today.getMonth(), 1));
    let start = moment(subscription.start);
    let covered = _.reduce(subscription.pricing, (result, value, key) => {
      let amount = value.included * value.overage;

      result.amount += amount;
      result[key] = _.extend({}, value, {amount});
      return result;
    }, {amount: 0});

    if (start.isAfter(desiredStart, 'day') && start.isSame(desiredStart, 'month')) {
      let currentDate = start.get('date');
      let endDate = moment(start._i, 'YYYY-MM-DD').daysInMonth();
      let diff = endDate - currentDate + 1;

      covered.amount *= diff / endDate;
    }

    return covered;
  },

  setOverage(payload) {
    this.data.overage = payload;
    this.trigger(this.data);
  },

  getOverage() {
    return this.data.overage;
  },

  getTotalPlanValue(subscription) {
    let commitment = null;

    if (!subscription || subscription === 'default') {
      commitment = this.data.profile.subscription.commitment;
    } else {
      commitment = subscription.commitment;
    }

    if (_.isString(commitment)) {
      // Workaround for SYNCORE-851
      commitment = commitment.replace(/u'/g, "'").replace(/'/g, '"');
      commitment = JSON.parse(commitment);
    }

    return parseInt(commitment.api, 10) + parseInt(commitment.cbx, 10);
  },

  onFetchBillingProfileCompleted(payload) {
    this.data.isLoading = false;
    this.setProfile(payload);
  },

  onFetchBillingUsageCompleted(payload) {
    this.data.isLoading = false;
    this.setUsage(payload);
  },

  onFetchBillingSubscriptionsCompleted(payload) {
    this.data.isLoading = false;
    this.setSubscriptions(payload);
  },

  onCancelSubscriptionsCompleted() {
    this.data.isLoading = false;
    this.data.hideDialogs = true;
    this.refreshData();
  },

  onCancelNewPlanCompleted() {
    this.data.isLoading = false;
    this.data.hideDialogs = true;
    this.refreshData();
  },

  onSubscribePlanCompleted() {
    this.data.isLoading = false;
    this.data.hideDialogs = true;
    this.refreshData();
  },

  onUpdateBillingProfileCompleted(payload) {
    this.setProfile(payload);
  },

  setChartLegend(payload) {
    this.data.chartLegend = payload;
    this.trigger(this.data);
  }
});
