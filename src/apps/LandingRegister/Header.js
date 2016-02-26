import React from 'react';
import Radium from 'radium';
import {IconButton} from 'material-ui';

export default Radium(() => {
  const styles = {
    headerDiv: {
      justifyContent: 'flex-end',
      display: 'flex',
      marginTop: 21,
      marginBottom: 95
    },
    iconStyle: {
      fontSize: 25.5,
      color: '#454545'
    },
    buttonStyle: {
      padding: '0px 15px 0px 0px',
      width: 'auto',
      height: 'auto',
      margin: 0
    }
  };

  return (
    <div style={styles.headerDiv}>
      <IconButton
        tooltip="Hacklag Discourse"
        tooltipPosition="bottom-center"
        linkButton={true}
        style={styles.buttonStyle}
        href="https://forum.hacklag.org/">
        <img
          width="25"
          height="25"
          src={"/img/icons/discourse.png"}
          alt="Discourse logo" />
      </IconButton>
      <IconButton
        tooltip="Hacklag Slack"
        tooltipPosition="bottom-center"
        linkButton={true}
        style={styles.buttonStyle}
        href="https://hacklag.slack.com/">
        <img
          width="25"
          height="25"
          src={"/img/icons/slack.png"}
          alt="Slack logo" />
      </IconButton>
      <IconButton
        tooltip="Hacklag GitHub"
        tooltipPosition="bottom-center"
        linkButton={true}
        iconClassName="icon-github"
        iconStyle={styles.iconStyle}
        style={styles.buttonStyle}
        href="https://github.com/hacklag/" />
    </div>
  );
});
