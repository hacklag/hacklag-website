import _ from 'lodash';

export default {

  getMenuItemHref(route) {
    return this.makeHref(route, this.getParams());
  },

  getActiveTab(menuItems, params) {
    let activeTab = {};

    _.some(menuItems, (item, index) => {
      if (item.route && this.isActive(item.route, item.params, item.query)) {
        activeTab.index = index;
        _.map(params, (param) => {
          activeTab[param] = item[param];
        });
        return true;
      }
    });

    return activeTab;
  }
};
