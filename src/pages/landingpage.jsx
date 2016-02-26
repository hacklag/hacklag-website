import React from 'react';
import Radium from 'radium';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import HacklagTheme from '../common/HacklagTheme';

import LandingRegister from '../apps/LandingRegister';

export default Radium(React.createClass({
  displayName: 'LandingPage',

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState() {
    return {
      muiTheme: ThemeManager.getMuiTheme(HacklagTheme)
    };
  },

  getChildContext() {
    return {
      muiTheme: this.state.muiTheme
    };
  },

  getStyles() {
    return {
      mainDiv: {
        color: '#4A4A4A',
        backgroundColor: '#FAFAFA',
        margin: 'auto auto -40px auto',
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column',
        maxWidth: 1440
      }
    };
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={{height: '100%'}}>
        <div style={styles.mainDiv}>
          <LandingRegister.Header/>
          <LandingRegister/>
          <div style={{height: 40}}></div>
        </div>
        <LandingRegister.Footer/>
      </div>
    );
  }
}));
