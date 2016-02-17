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
        color: '#565a5f',
        backgroundColor: '#f5f8f9',
        margin: 'auto'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
        {this.props.children}
      </div>
    );
  }
});
