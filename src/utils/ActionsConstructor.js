import Reflux from 'reflux';
import _ from 'lodash';

import Connection from '../apps/Session/Connection';
import Syncano from '../apps/Syncano';

let Libraries = {Syncano};
let Context = {
  Connection: Connection.get(),
  D: Connection.D
};

export default (actions = {}, options = {withDialog: false, withCheck: false}) => {
  if (options.withDialog) {
    actions.showDialog = {};
    actions.dismissDialog = {};
  }

  if (options.withCheck) {
    actions.checkItem = {};
    actions.selectAll = {};
    actions.uncheckAll = {};
  }

  let RefluxActions = Reflux.createActions(actions);

  _.forEach(actions, (action, key) => {
    if (_.isString(action.method)) {
      if (!_.has(Libraries, action.method)) {
        throw new Error('Invalid action method: "' + action.method + '"');
      }

      action.method = _.get(Libraries, action.method);
    }

    if (_.isFunction(action.method)) {
      RefluxActions[key].listen(action.method);
      _.extend(RefluxActions[key], Context);
    }
  });

  return RefluxActions;
};
