import Reflux from 'reflux';
import moment from 'moment';
import d3 from 'd3';
import _ from 'lodash';

import Actions from './ProfileBillingChartActions';
import PlanActions from './ProfileBillingPlanActions';

export default Reflux.createStore({
  listenables: Actions,
  format: 'YYYY-MM-DD',

  init() {
    this.joinTrailing(
      Actions.fetchBillingProfile.completed,
      Actions.fetchTotalDailyUsage.completed,
      this.prepareChartData
    );
  },

  getInitialState() {
    let today = this.getToday();
    let allDates = this.getAllDates();
    let xColumn = ['x'].concat(allDates);

    return {
      isLoading: true,
      chart: {
        data: {
          x: 'x',
          columns: [xColumn],
          types: {},
          groups: [[]],
          colors: {
            api: '#77D8F6',
            cbx: '#FFD78E'
          }
        },
        point: {
          show: false
        },
        axis: {
          x: {
            label: 'Day of the month',
            type: 'timeseries',
            tick: {
              fit: true,
              format: '%b %d'
            }
          },
          y: {
            label: 'Cost ($)',
            type: 'indexed',
            tick: {
              format: (x) => {
                return x / 2 ? x : null;
              },
              fit: true
            },
            show: true
          }
        },
        grid: {
          x: {
            lines: [
              {value: today, text: 'Today', position: 'start'}
            ]
          },
          y: {lines: []}
        },
        tooltip: {
          format: {
            title: (input) => {
              let title = moment(input).format('MMM DD');
              let date = moment(input).format(this.format);

              if (date > today) {
                title = `Prediction for ${title}`;
              }
              return title;
            },
            name: (name) => {
              return {api: 'API calls', cbx: 'CodeBox runs'}[name];
            },
            value: (value) => d3.format('$')(_.round(value, 5))
          }
        },
        regions: [{
          start: today,
          end: _.last(allDates),
          class: 'predictions'
        }],
        legend: {show: false}
      },
      profile: {
        subscription: {}
      },
      overage: {
        api: 0,
        cbx: 0,
        amount: 0
      },
      covered: {
        api: 0,
        cbx: 0,
        amount: 0
      }
    };
  },

  prepareChartData(joinProfiles, joinUsages) {
    let profile = _.first(joinProfiles);
    let usage = _.first(joinUsages);
    let state = this.getInitialState();

    state.isLoading = false;
    state.profile = profile;

    let subscription = profile.subscription || {};
    let plan = subscription.plan || null;
    let pricing = subscription.pricing;
    let usageAmount = {api: 0, cbx: 0};
    let columns = {api: {}, cbx: {}};

    if (_.isEmpty(pricing)) {
      // $5.25
      pricing = {
        api: {overage: 0.0000200, included: 200000},
        cbx: {overage: 0.0002500, included: 5000}
      };
    }

    // Map array to nested object e.g {source: {date: value}} -> {'api': {'2015-01-01': 0.0000200}}
    _.forEach(usage.objects, (_usage) => {
      if (typeof columns[_usage.source] === 'undefined') {
        return;
      }

      let amount = pricing[_usage.source].overage * _usage.value;

      columns[_usage.source][_usage.date] = amount;
      usageAmount[_usage.source] += amount;
    });

    this.fillBlanks(columns);
    this.objectToArray(columns);

    _.forEach(columns, (values, name) => {
      state.chart.data.columns.push([name].concat(values));
      state.chart.data.groups[0].push(name);
      state.chart.data.types[name] = 'area';
    });

    state.covered = _.reduce(pricing, (result, value, key) => {
      let amount = value.included * value.overage;

      result.amount += amount;
      result[key] = _.extend({}, value, {amount});
      return result;
    }, {amount: 0});

    state.covered.amount = _.round(state.covered.amount, 0);
    state.chart.grid.y.lines.push({
      value: state.covered.amount,
      text: 'Covered by plan',
      position: 'middle'
    });

    state.overage = _.reduce(pricing, (result, value, key) => {
      let covered = state.covered[key];
      let amount = (usageAmount[key] > covered.amount) ? usageAmount[key] - covered.amount : 0;
      let included = _.round(amount / value.overage);

      result.amount += amount;
      result[key] = result[key] = _.extend({}, value, {amount, included});
      return result;
    }, {amount: 0});

    if (plan !== 'builder' && _.last(state.chart.data.columns[1]) < 6 && _.last(state.chart.data.columns[2]) < 6) {
      state.chart.axis.y.max = state.covered.amount + (0.1 * state.covered.amount);
    }

    if (plan === 'builder' && _.last(state.chart.data.columns[1]) < 0.5 && _.last(state.chart.data.columns[2]) < 0.5) {
      state.chart.axis.y.max = 0.5;
    }

    PlanActions.setOverage(state.overage);
    PlanActions.setChartLegend({
      rows: [
        {
          percent: _.round((usageAmount.api / pricing.api.overage) / pricing.api.included * 100, 0),
          amount: _.round(usageAmount.api / pricing.api.overage, 0),
          label: 'API calls',
          styles: {background: '#77D8F6'}
        },
        {
          percent: _.round((usageAmount.cbx / pricing.cbx.overage) / pricing.cbx.included * 100, 0),
          amount: _.round(usageAmount.cbx / pricing.cbx.overage, 0),
          label: 'CodeBox runs',
          styles: {background: '#FFBC5A'}
        }
      ],
      showPercents: plan === 'paid-commitment'
    });

    this.trigger(state);
  },

  fillBlanks(columns) {
    // We need to calculate median for predictions
    let today = this.getToday();
    let medians = _.reduce(columns, (result, value, key) => {
      result[key] = _.round(d3.median(_.values(value)) || 0);
      return result;
    }, {});

    _.forEach(this.getAllDates(), (date) => {
      _.forEach(columns, (val, source) => {
        if (typeof columns[source][date] === 'undefined') {
          columns[source][date] = 0;
        }

        if (date > today) {
          columns[source][date] += medians[source];
        }
      });
    });
  },

  objectToArray(elements) {
    _.forEach(elements, (val, elementKey) => {
      let keys = _.keys(val).sort();

      elements[elementKey] = _.reduce(keys, (result, key, index) => {
        let prev = (index > 0) ? result[index - 1] : 0;

        result.push(val[key] + prev);
        return result;
      }, []);
    });
  },

  sumAncestors(elements) {
    _.forEach(elements, (val, key) => {
      elements[key] = _.reduce(val, (result, value, index) => {
        value.value += (index > 0) ? result[index - 1].value : 0;
        result.push(value);
        return result;
      }, []);
    });
  },

  getDate() {
    let today = new Date();

    today.year = today.getFullYear();
    today.month = today.getMonth();
    return today;
  },

  getToday() {
    return moment(this.getDate()).format(this.format);
  },

  getAllDates() {
    let {year, month} = this.getDate();
    let days = _.range(1, this.getNumberOfDays() + 1);

    return _.map(days, (day) => moment(new Date(year, month, day)).format(this.format));
  },

  getNumberOfDays() {
    let {year, month} = this.getDate();

    return new Date(year, month + 1, 0).getDate();
  },

  getStartDate() {
    let {year, month} = this.getDate();

    return moment(new Date(year, month, 1)).format(this.format);
  },

  getEndDate() {
    let {year, month} = this.getDate();

    return moment(new Date(year, month, this.getNumberOfDays())).format(this.format);
  }

});
