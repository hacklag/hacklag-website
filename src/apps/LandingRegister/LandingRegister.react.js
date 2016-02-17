import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'LandingRegister',

  getStyles() {
    return {
      componentBody: {
        color: '5d5d5d',
        backgroundColor: '#fafafa',
        backgroundImage: 'url(/img/background_sendemail.png)',
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'row',
        fontSize: 24
      },
      logoBar: {
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        width: 324
      },
      contentBar: {
        border: '1px dashed green',
        display: 'flex',
        flexDirection: 'column'
      },
      hackLagLogo: {
        width: 324,
        height: 314
      },
      socialBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
      },
      socialLogo: {
        width: 64,
        height: 64
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.componentBody}>
        <div style={styles.logoBar}>
          <img style={styles.hackLagLogo} src={"/img/hacklag_sketch.png"} alt="Hacklag logo" />
          <div style={styles.socialBar}>
            <img style={styles.socialLogo} src={"/img/icons/discourse.png"} alt="Discourse logo" />
            <img style={styles.socialLogo} src={"/img/icons/slack.png"} alt="Slack logo" />
          </div>
        </div>
        <div style={styles.contentBar}>
          Main text with register button
        </div>
      </div>
    );
  }
}));
