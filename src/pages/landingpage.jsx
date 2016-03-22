import React from 'react';
import {Radium, StyleRoot} from 'radium';
import LandingRegister from '../apps/LandingRegister';
import HacklagTheme from '../common/HacklagTheme';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';

const muiTheme = getMuiTheme(HacklagTheme);

@Radium
export default class landingPage extends React.Component {
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
  }

  render() {
    const styles = this.getStyles();

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <StyleRoot style={{height: '100%'}}>
          <div style={styles.mainDiv}>
            <LandingRegister.Header/>
            {this.props.children}
          </div>
          <LandingRegister.Footer/>
        </StyleRoot>
      </MuiThemeProvider>
    );
  }
}
landingPage.propTypes = {
  children: React.PropTypes.object.isRequired
};
