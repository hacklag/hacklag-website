import React from 'react';
import {History, State, RouteHandler} from 'react-router';

export default React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  getStyles() {
    return {
      mainDiv: {
        color: '5d5d5d',
        backgroundColor: '#fafafa',
        margin: 'auto'
      },
      footerDiv: {
        justifyContent: 'center',
        display: 'flex',
        alignContent: 'flex-end'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
      <div>
        {this.props.children}
      </div>
      <div style={styles.footerDiv}>
        2016 Hacklag Foundation
      </div>
      </div>
    );
  }
});
