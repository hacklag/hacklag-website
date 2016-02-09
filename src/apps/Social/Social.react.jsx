import React from 'react';
import MUI from 'material-ui';

export default React.createClass({
  displayName: 'Social',

  componentDidMount() {

  },

  getStyles() {
    return {
      componentBody: {
        maxWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#565a5f'
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
            <MUI.FontIcon style={{fontSize: 12, color: 'gray'}} className="material-icons">place</MUI.FontIcon>
            Bialystok, Poland
          </div>
          <MUI.RaisedButton
            label="Follow"
            style={styles.socialMainButton}
            linkButton={true}
            href="https://github.com/hacklag"
            secondary={true}
            icon={<MUI.FontIcon style={{fontSize: 16, color: 'gray'}} className="material-icons">place</MUI.FontIcon>}
          />
        </div>
        <div id="social-icons-menu">
        <MUI.IconButton
            styles={styles.socialIcon}
            tooltip="Facebook"
            tooltipPosition="top-center"
            linkButton={true}
            href="https://www.facebook.com/Hacklag-1536319733349471/">
            <img src={"/img/social/facebook.svg"} alt="Facebook"/>
          </MUI.IconButton>
          <MUI.IconButton
            styles={styles.socialIcon}
            tooltip="Github"
            tooltipPosition="top-center"
            linkButton={true}
            href="https://github.com/hacklag/">
            <img src={"/img/social/github.svg"} alt="GitHub"/>
          </MUI.IconButton>
          <MUI.IconButton
            styles={styles.socialIcon}
            tooltip="Twitter"
            tooltipPosition="top-center"
            linkButton={true}
            href="https://twitter.com/">
            <img src={"/img/social/twitter.svg"} alt="Twitter"/>
          </MUI.IconButton>
          <MUI.IconButton
            styles={styles.socialIcon}
            tooltip="GooglePlus"
            tooltipPosition="top-center"
            linkButton={true}
            href="https://plus.google.com/communities/108215770973618388169">
            <img src={"/img/social/googleplus.svg"} alt="GooglePlus"/>
          </MUI.IconButton>
          <MUI.IconButton
            styles={styles.socialIcon}
            tooltip="LinkedIn"
            tooltipPosition="top-center"
            linkButton={true}
            href="https://www.linkedin.com/grps/Hacklag-8476061">
            <img src={"/img/social/linkedin.svg"} alt="LinkedIn"/>
          </MUI.IconButton>
        </div>
      </div>
    );
  }
});
