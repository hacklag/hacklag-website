import React from 'react';
import Isvg from 'react-inlinesvg';

import './Logo.sass';


export default React.createClass({
  displayName: 'Logo',

  getStyles() {
    return {
      text: {
        color: '#2C93D1',
        fontSize: '1.5em',
        minWidth: 224
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.text}>HACKLAG</div>
    );
  }
});
