import React from 'react';
import Radium from 'radium';
import LandingRegister from '../apps/LandingRegister';

export default Radium(React.createClass({

  displayName: 'LandingPage',

  getStyles() {
    return {
      mainDiv: {
        color: '#5d5d5d',
        backgroundColor: '#fafafa',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Roboto'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainDiv}>
        <LandingRegister.Header/>
        <LandingRegister/>
        <LandingRegister.Footer/>
      </div>
    );
  }
}));
