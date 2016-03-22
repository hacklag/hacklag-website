import React from 'react';
import Radium from 'radium';
import {IconButton} from 'material-ui';

export default Radium(() => {
  const styles = {
    header: {
      marginTop: 9,
      marginBottom: 71,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      '@media (max-width: 750px)': {
        marginBottom: 0
      }
    },
    githubStyle: {
      color: '#444444'
    },
    iconImg: {
      width: '100%',
      minWidth: 24
    },
    facebookStyle: {
      color: '#4965b6'
    }
  };

  return (
    <div style={styles.header}>
      <IconButton
        tooltip="Hacklag Facebook"
        tooltipPosition="bottom-center"
        linkButton={true}
        iconClassName="icon-facebook-box"
        iconStyle={styles.facebookStyle}
        href="https://www.facebook.com/Hacklag-1536319733349471/" />
      <IconButton
        tooltip="Hacklag Discourse"
        tooltipPosition="bottom-center"
        linkButton={true}
        href="https://forum.hacklag.org/"
        iconStyle={styles.iconImg}>
        <img
          src="/img/icons/discourse.png"
          alt="Discourse logo"
          styles={styles.iconImg}/>
      </IconButton>
      <IconButton
        tooltip="Hacklag Slack"
        tooltipPosition="bottom-center"
        linkButton={true}
        href="https://hacklag.slack.com/"
        iconStyle={styles.iconImg}>
        <img
          src="/img/icons/slack.svg"
          alt="Slack logo"
          styles={styles.iconImg}/>
      </IconButton>
      <IconButton
        tooltip="Hacklag GitHub"
        tooltipPosition="bottom-left"
        linkButton={true}
        iconClassName="icon-github"
        iconStyle={styles.githubStyle}
        href="https://github.com/hacklag/" />
    </div>
  );
});
