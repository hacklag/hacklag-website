import React from 'react';
import Radium from 'radium';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import HacklagTheme from '../common/HacklagTheme';

import LandingRegister from '../apps/LandingRegister';

export default Radium(React.createClass({
  displayName: 'LandingPage',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

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
        paddingBottom: 40,
        display: 'flex',
        minHeight: '100%',
        flexDirection: 'column',
        maxWidth: 1440
      }
    };
  },

  render() {
    const styles = this.getStyles();
    const {children} = this.props;

    return (
      <div style={{height: '100%'}}>
        <div style={styles.mainDiv}>
          <LandingRegister.Header/>
          {children}
        </div>
        <LandingRegister.Footer/>
      </div>
    );
  }
}));
