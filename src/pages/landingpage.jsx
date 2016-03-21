import React from 'react';
import {StyleRoot} from 'radium';
import HacklagTheme from '../common/HacklagTheme';
import LandingRegister from '../apps/LandingRegister';

import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(HacklagTheme))
class landingPage extends React.Component {
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
      <StyleRoot>
        <div style={{height: '100%'}}>
          <div style={styles.mainDiv}>
            <LandingRegister.Header/>
            {this.props.children}
          </div>
          <LandingRegister.Footer/>
        </div>
      </StyleRoot>
    );
  }
}
landingPage.propTypes = {
  children: React.PropTypes.object.isRequired,
  muiTheme: React.PropTypes.object
};
landingPage.childContextTypes = {
  muiTheme: React.PropTypes.object
};

export default landingPage;
