import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'Footer',

  getStyles() {
    return {
      footerDiv: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        height: 40,
        marginTop: 40,
        width: '100%'
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
