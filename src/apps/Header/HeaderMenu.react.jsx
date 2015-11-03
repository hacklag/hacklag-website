import React from 'react';
import Router from 'react-router-old';
import Reflux from 'reflux';

import MUI from 'syncano-material-ui';

export default React.createClass({

  displayName: 'HeaderMenu',

  contextTypes: {
    router: React.PropTypes.func.isRequired,
    muiTheme: React.PropTypes.object
  },

  mixins: [
    Router.State
  ],

  getActiveMenuItemIndex() {
    let index = 0;

    this.state.menuItems.some((item, i) => {
      if (this.isActive(item.route, item.params, item.query)) {
        index = i;
        return true;
      }
    });
    return index;
  },

  getStyles() {
    return {
      menuContainer: {
        display: '-webki-inline-flex; display: inline-flex'
      },
      menu: {
        backgroundColor: 'transparent',
        height: 56
      },
      menuItemStyles: {
        color: this.context.muiTheme.rawTheme.palette.primary3Color,
        fontWeight: 400,
        fontSize: 17
      }
    };
  },

  handleTabActive(tab) {
    this.context.router.transitionTo(tab.props.route, tab.props.params);
  },

  renderMenuItem(tab, index) {
    let styles = this.getStyles();

    return (
      <MUI.Tab
        key={'menuItem-' + tab.route + '-' + index}
        label={tab.label}
        route={tab.route}
        params={tab.params}
        style={styles.menuItemStyles}
        onActive={this.handleTabActive}/>
    );
  },

  render() {
    let styles = this.getStyles();

    if (this.state.menuItems.length === 0) {
      return null;
    }

    return (
      <div style={styles.menuContainer}>
        <MUI.Tabs
          tabItemContainerStyle={styles.menu}
          initialSelectedIndex={this.getActiveMenuItemIndex()}>
          {this.state.menuItems.map(this.renderMenuItem)}
        </MUI.Tabs>
      </div>
    );
  }
});
