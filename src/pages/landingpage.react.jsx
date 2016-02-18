import React from 'react';
import {History, State, RouteHandler} from 'react-router';

export default React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  getStyles() {
    return {
      mainDiv: {
        color: '5d5d5d',
        //backgroundColor: '#fafafa',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      },
      footerDiv: {
        justifyContent: 'center',
        display: 'flex'
      },
      headerDiv: {
        justifyContent: 'flex-end',
        display: 'flex'
      },
      develBackgroundImage: {
        backgroundImage: 'url(/img/form.png)',
        backgroundSize: '100%'
      },
      githubLogo: {
        width: 52,
        height: 52,
        margin: 32
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.develBackgroundImage}>
        <div style={styles.mainDiv}>
          <div style={styles.headerDiv}>
            <a href="https://github.com/hacklag">
              <img style={styles.githubLogo} src={"/img/social/github.svg"} alt="GitHub" />
            </a>
          </div>
          <div>
            {this.props.children}
          </div>
          <div style={styles.footerDiv}>
            2016 Hacklag Foundation
          </div>
        </div>
      </div>
    );
  }
});
