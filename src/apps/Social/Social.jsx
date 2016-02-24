import React from 'react';
import Radium from 'radium';
import {RaisedButton, FontIcon, IconButton} from 'material-ui';

export default Radium(() => {
  const styles = {
    componentBody: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      textAlign: 'center',
      color: '#565a5f',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      fontSize: 12,
      '@media (min-width: 48em)': {
        marginRight: 24,
        marginLeft: 24
      }
    },
    iconStyle: {
      fontSize: 38,
      color: '#929292'
    },
    buttonStyle: {
      width: 'auto',
      height: 'auto'
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

  return (
    <div style={styles.componentBody}>
      <div style={styles.logoBox}>
        <img
          src={"/img/logo.png"}
          style={styles.hacklagLogo}
          alt="Hacklag logo" />
        <div style={{fontWeight: 600, fontSize: 24}}>
          Hacklag
        </div>
        <div style={{display: 'block', fontSize: 14}}>
          Developers connector
        </div>
        <div style={{color: '#9a9ea3'}}>
          <FontIcon
            style={{fontSize: 12, color: 'gray'}}
            className="material-icons">
            place
          </FontIcon>
          Bialystok, Poland
        </div>
        <RaisedButton
          label="Follow"
          style={styles.socialMainButton}
          linkButton={true}
          href="https://github.com/hacklag"
          secondary={true} />
      </div>
      <div id="social-icons-menu">
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.buttonStyle}
          tooltip="Facebook"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-facebook-circle"
          href="https://www.facebook.com/Hacklag-1536319733349471/" />
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.buttonStyle}
          tooltip="GitHub"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-github-circle"
          href="https://github.com/hacklag/" />
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.buttonStyle}
          tooltip="Twitter"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-twitter-circle"
          href="https://twitter.com/HacklagHQ/" />
      </div>
    </div>
  );
});
