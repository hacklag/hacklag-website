import React from 'react';
import Radium from 'radium';
import {IconButton} from 'material-ui';

export default Radium(() => {
  const styles = {
    header: {
      marginTop: 21,
      marginBottom: 71,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      '@media (max-width: 750px)': {
        justifyContent: 'space-between',
        marginBottom: 40
      }
    },
    headerLogo: {
      display: 'none',
      '@media (max-width: 750px)': {
        display: 'block',
        paddingLeft: 16
      }
    },
    headerLogoImg: {
      width: 175,
      '@media (max-width: 350px)': {
        width: 120
      }
    },
    iconStyle: {
      fontSize: 30,
      color: '#454545'
    },
    iconImg: {
      width: 25,
      height: 25
    }
  };

  return (
    <div style={styles.header}>
      <div style={styles.headerLogo}>
        <img
          src={"/img/hackbat/hackabt_square_bialystok.png"}
          alt="Hacklag logo"
          style={styles.headerLogoImg} />
      </div>
      <div style={styles.headerIcons}>
        <IconButton
          tooltip="Hacklag Discourse"
          tooltipPosition="bottom-center"
          linkButton={true}
          style={styles.buttonStyle}
          href="https://forum.hacklag.org/"
          iconStyle={styles.iconImg}>
          <img
            src={"/img/icons/discourse.png"}
            alt="Discourse logo" />
        </IconButton>
        <IconButton
          tooltip="Hacklag Slack"
          tooltipPosition="bottom-center"
          linkButton={true}
          href="https://hacklag.slack.com/"
          iconStyle={styles.iconImg}>
          <img
            src={"/img/icons/slack.png"}
            alt="Slack logo" />
        </IconButton>
        <IconButton
          tooltip="Hacklag GitHub"
          tooltipPosition="bottom-center"
          linkButton={true}
          iconClassName="icon-github"
          iconStyle={styles.iconStyle}
          href="https://github.com/hacklag/" />
      </div>
    </div>
  );
});
