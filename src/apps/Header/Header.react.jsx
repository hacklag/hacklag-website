import React from 'react';
import Radium from 'radium';
import Router from 'react-router-old';

// Stores & Actions

// Components
import MUI from 'syncano-material-ui';
import Common from '../../common';
import Logo from '../../common/Logo/Logo.react';

import './Header.sass';

export default Radium(React.createClass({

  displayName: 'Header',

  contextTypes: {
    router: React.PropTypes.func.isRequired,
    muiTheme: React.PropTypes.object
  },

  mixins: [
    Router.Navigation,
    Router.State,
    MUI.Utils.Styles
  ],

  componentDidMount() {

  },

  getStyles() {
    return {
      main: {
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 8
      },
      topToolbar: {
        background: '#3366CC',
        height: 64,
        padding: 0
      },
      logotypeContainer: {
        paddingLeft: 24,
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      },
      logo: {
        width: 120
      },
      toolbarList: {
        padding: 10,
        display: 'flex'
      },
      toolbarListItem: {
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer'
      },
      bottomToolbarGroupIcon: {
        color: '#fff'
      }
    };
  },

  handleBillingClick(event) {
    this.transitionTo('profile-billing-plan');
    event.stopPropagation();
  },

  handleSolutionsClick() {
    this.transitionTo('solutions');
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.main}>
        <MUI.Toolbar style={styles.topToolbar}>
          <MUI.ToolbarGroup style={styles.logotypeContainer}>
            <Router.Link to="app">
              <Common.Logo
                style={styles.logo}
                className="logo-white"/>
            </Router.Link>
          </MUI.ToolbarGroup>
          <MUI.ToolbarGroup
            float="right"
            style={{marginLeft: 100, height: '100%'}}>
            <ul
              className="toolbar-list"
              style={styles.toolbarList}>
              <li style={styles.toolbarListItem}>
                <a
                  href="http://google.pl/"
                  target="_blank">
                  Google
                </a>
              </li>
              <li style={styles.toolbarListItem}>
                <a
                  href="https://localhost:8080/#/counter"
                  target="_self">
                  Counter Page
                </a>
              </li>
              <li style={styles.toolbarListItem}>
                <a
                  href="https://localhost:8080/#/counter/Forward"
                  target="_self">
                  Counter Forward
                </a>
              </li>
              <li style={styles.toolbarListItem}>
                <a
                  href="https://localhost:8080/#/counter/Reverse"
                  target="_self">
                  Counter Reverse
                </a>
              </li>
            </ul>
          </MUI.ToolbarGroup>
        </MUI.Toolbar>
      </div>
    );
  }
}));
