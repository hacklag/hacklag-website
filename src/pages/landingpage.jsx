import React from 'react';
import Radium from 'radium';
import LandingRegister from '../apps/LandingRegister';
import HacklagTheme from '../common/HacklagTheme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const styles = {
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

const landingPage = Radium(({children}) => (
  <MuiThemeProvider muiTheme={getMuiTheme(HacklagTheme)}>
    <div style={{height: '100%'}}>
      <div style={styles.mainDiv}>
        <LandingRegister.Header/>
        {children}
      </div>
      <LandingRegister.Footer/>
    </div>
  </MuiThemeProvider>
));

landingPage.propTypes = {
  children: React.PropTypes.object.isRequired
};

export default landingPage;
