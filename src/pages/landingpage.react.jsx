import React from 'react';
import {History, State, RouteHandler} from 'react-router';

//Apps
import LandingRegister from '../apps/LandingRegister';

export default React.createClass({

  displayName: 'App',

  propTypes: {
    children: React.PropTypes.element.isRequired
  },

  getStyles() {
    return {
      mainDiv: {
        color: '#5d5d5d',
        backgroundColor: '#fafafa',
        margin: 'auto',
        display: 'flex',
        flexDirection: 'column'
      },
      develBackgroundImage: {
        backgroundImage: 'url(/img/form.png)',
        backgroundSize: '100%'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.develBackgroundImage}>
        <div style={styles.mainDiv}>
          <LandingRegister.Header/>
          <LandingRegister/>
          <LandingRegister.Footer/>
        </div>
      </div>
    );
  }
});
