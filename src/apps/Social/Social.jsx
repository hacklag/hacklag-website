import React from 'react';
import Radium from 'radium';
import {RaisedButton, FontIcon, IconButton} from 'material-ui';

export default Radium(() => {
  const styles = {
    componentBody: {
      display: 'flex',
      backgroundColor: '#fff',
      textAlign: 'center',
      color: '#565a5f',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
      fontSize: 12,
      justifyContent: 'center',
      '@media (min-width: 48em)': {
        marginRight: 24,
        marginLeft: 24,
        minWidth: 200,
        flexDirection: 'column'
      },
      '@media (max-width: 48em)': {
        borderBottom: '1px solid #eceff2',
        flexDirection: 'row'
      }
    },
    iconStyle: {
      fontSize: 38,
      color: '#929292'
    },
    iconButtonStyle: {
      width: 'auto',
      height: 'auto'
    },
    hacklagLogo: {
      height: 128,
      width: 128,
      marginTop: 10,
      marginBottom: 20,
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      '@media (max-width: 48em)': {
        marginRight: 30
      },
      '@media (max-width: 38em)': {
        display: 'none'
      }
    },
    socialMainButton: {
      width: 152,
      marginTop: 16,
      backgroundColor: '#38b7ea'
    },
    logoBox: {
      padding: 16,
      borderBottom: '1px solid #eceff2',
      '@media (max-width: 48em)': {
        display: 'flex'
      }
    },
    socialBarHeaderName: {
      fontWeight: 600,
      fontSize: 24,
      lineHeight: '24px'
    },
    socialBarDescription: {
      display: 'block',
      fontSize: 14,
      lineHeight: '20px'
    }
  };

  return (
    <div style={styles.componentBody}>
      <div style={styles.logoBox}>
        <img
          src={"/img/hacklag_sketch.png"}
          style={styles.hacklagLogo}
          alt="Hacklag logo" />
        <div>
          <div style={styles.socialBarHeaderName}>
            Hacklag
          </div>
          <div style={styles.socialBarDescription}>
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
      </div>
      <div id="social-icons-menu">
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.iconButtonStyle}
          tooltip="Facebook"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-facebook-circle"
          href="https://www.facebook.com/Hacklag-1536319733349471/" />
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.iconButtonStyle}
          tooltip="GitHub"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-github-circle"
          href="https://github.com/hacklag/" />
        <IconButton
          iconStyle={styles.iconStyle}
          style={styles.iconButtonStyle}
          tooltip="Twitter"
          tooltipPosition="top-center"
          linkButton={true}
          iconClassName="icon-twitter-circle"
          href="https://twitter.com/HacklagHQ/" />
      </div>
    </div>
  );
});
