import React from 'react';
import Router from 'react-router-old';
import Test from '../apps/Test/Test.react';

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
    count: 2015,
    test_string: 'asd'
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.border}>
      <Test />
      <div style={styles.content}>
      This is Test page<br/><br/>
      <h1>{this.getExampleVariable.test_string}</h1>
      </div>
      </div>
    );
  }

});
