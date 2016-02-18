import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'Footer',

  getStyles() {
    return {
      footerDiv: {
        justifyContent: 'center',
        display: 'flex'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.footerDiv}>
        2016 Hacklag Foundation
      </div>
    );
  }
}));
