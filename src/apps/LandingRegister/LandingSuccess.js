import React from 'react';
import Radium from 'radium';
import {RaisedButton, FontIcon} from 'material-ui';
import {ShareButtons} from 'react-share';

export default Radium(() => {
  const {FacebookShareButton, TwitterShareButton} = ShareButtons;
  const pageUrl = 'http://hacklag.org/';
  const pageTitle = 'Hacklag';
  const styles = {
    content: {
      maxWidth: 450,
      fontFamily: 'Raleway',
      fontWeight: 300,
      lineHeight: 1.6,
      textAlign: 'justify',
      fontSize: 16
    },
    successText: {
      fontSize: 18,
      lineHeight: '21px',
      marginBottom: 24
    },
    successHeadlineText: {
      fontSize: 20,
      fontWeight: 400
    },
    socialButtons: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 24
    },
    shareButton: {
      minWidth: 210,
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.26), 0 2px 10px rgba(0, 0, 0, 0.16)'
    },
    labelShareButton: {
      fontWeight: 400,
      fontSize: 16,
      lineHeight: '19px',
      verticalAlign: 'text-bottom'
    },
    successBottomText: {
      fontSize: 20,
      lineHeight: '21px',
      textAlign: 'center'
    }
  };

  return (
      <div style={styles.content}>
        <div style={styles.successText}>
          <span style={styles.successHeadlineText}>Thank you for signing up</span>
          <br/>
          <br/>
          Please check your inbox to find invitation for <strong>Chat</strong> and <strong>Forum</strong>.
          In the meantime please help us spread the word and share some info on social media:
          <br/>
          <br/>
        </div>
        <div style={styles.socialButtons}>
          <TwitterShareButton
            title={pageTitle}
            url={pageUrl}>
            <RaisedButton
              label="twitter"
              labelStyle={styles.labelShareButton}
              style={styles.shareButton}
              backgroundColor="#0693E3"
              labelColor="#FFFFFF"
              icon={
                <FontIcon className="icon-twitter" style={styles.shareIcon}/>
              } />
          </TwitterShareButton>
          <FacebookShareButton
            title={pageTitle}
            url={pageUrl}>
            <RaisedButton
              label="facebook"
              labelStyle={styles.labelShareButton}
              style={styles.shareButton}
              backgroundColor="#425CAE"
              labelColor="#FFFFFF"
              icon={
                <FontIcon className="icon-facebook-box" style={styles.shareIcon} />
              } />
          </FacebookShareButton>
        </div>
        <div style={styles.successBottomText}>
          Thank you for your help!
        </div>
      </div>
    );
});
