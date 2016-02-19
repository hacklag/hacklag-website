import React from 'react';
import Radium from 'radium';
import {RaisedButton, FontIcon, IconButton} from 'material-ui';

export default Radium(React.createClass({
  displayName: 'Social',

  getStyles() {
    return {
      componentBody: {
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#565a5f',
        boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
      },
      socialIcon: {
        height: 32,
        width: 32,
        margin: 8
      },
      socialIconsBar: {
        textAlign: 'center',
        padding: '16px 16px 16px 8px'
      },
      hacklagLogo: {
        height: 128,
        width: 128,
        margin: '10px auto 20px',
        display: 'block'
      },
      socialMainButton: {
        width: 152,
        marginTop: 16,
        backgroundColor: '#38b7ea'
      },
      logoBox: {
        padding: '16px 16px 16px 8px',
        borderBottom: '1px solid #eceff2'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <div style={styles.logoBox}>
          <img src={"/img/logo.png"} style={styles.hacklagLogo} alt="Hacklag logo" />
          <div style={{fontWeight: 600, fontSize: 24}}>Hacklag</div>
          <div style={{display: 'block', fontSize: 14}}>Developers connector</div>
          <div style={{fontSize: 12, color: '#9a9ea3'}}>
            <FontIcon style={{fontSize: 12, color: 'gray'}} className="material-icons">place</FontIcon>
            Bialystok, Poland
          </div>
          <RaisedButton
            label="Follow"
            style={styles.socialMainButton}
            linkButton={true}
            href="https://github.com/hacklag"
            secondary={true}
            icon={<FontIcon style={{fontSize: 16, color: 'gray'}} className="material-icons">place</FontIcon>}
          />
        </div>
        <div id="social-icons-menu">
          <IconButton
              styles={styles.socialIcon}
              tooltip="Facebook"
              tooltipPosition="top-center"
              linkButton={true}
              href="https://www.facebook.com/Hacklag-1536319733349471/">
              <img src={"/img/social/facebook.svg"} alt="Facebook"/>
            </IconButton>
            <IconButton
              styles={styles.socialIcon}
              tooltip="Github"
              tooltipPosition="top-center"
              linkButton={true}
              href="https://github.com/hacklag/">
              <img src={"/img/social/github.svg"} alt="GitHub"/>
            </IconButton>
            <IconButton
              styles={styles.socialIcon}
              tooltip="Twitter"
              tooltipPosition="top-center"
              linkButton={true}
              href="https://twitter.com/HacklagHQ/">
              <img src={"/img/social/twitter.svg"} alt="Twitter"/>
            </IconButton>
        </div>
      </div>
    );
  }
}));
