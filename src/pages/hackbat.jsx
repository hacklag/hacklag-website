import React from 'react';
import Radium from 'radium';
import HacklagTheme from '../common/HacklagTheme';
import Hackbat from '../apps/Hackbat';
import LandingRegister from '../apps/LandingRegister';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

export default Radium(React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  componentDidMount() {
    (function(data, source, id) {
      let js = '';
      const fjs = data.getElementsByTagName(source)[0];

      if (data.getElementById(id)) return;
      js = data.createElement(source);
      js.id = id;
      js.src = '//connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v2.5';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  },

  getStyles() {
    return {
      mainDiv: {
        color: '#4A4A4A',
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
      <MuiThemeProvider muiTheme={getMuiTheme(HacklagTheme)}>
        <div style={{height: '100%'}}>
          <div style={styles.mainDiv}>
            <LandingRegister.Header/>
            {children}
          </div>
          <Hackbat.Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}));
