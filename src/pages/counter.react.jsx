import React from 'react';
import Router from 'react-router-old';
import Header from '../apps/Header/Header.react';

export default React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  mixins: [
    Router.State,
    Router.Navigation
  ],

  getStyles() {
    return {
      leftNav: {
        paddingTop: 64,
        zIndex: 7,
        overflow: 'visible'
      },
      menuItemStyleSubheader: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontSize: 12,
        paddingTop: 4,
        fontWeight: 800
      },
      content: {
        margin: '96px 104px 48px 304px',
        border: '1px dotted green'
      },
      border: {
        border: '2px dashed red',
        padding: 5
      }
    };
  },

  getExampleVariable: {
    count: 2015
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.border}>
      <Header />
      <div style={styles.content}>
      This is Counter page<br/><br/>
      <h1>{this.getExampleVariable.count}</h1>
      </div>
      <Router.RouteHandler />
      </div>
    );
  }

});
