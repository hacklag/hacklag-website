import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'LeftBar',

  getInitialState() {
    return {
      textFieldValue: '',
      hover: false
    };
  },

  getStyles() {
    return {
      logoBar: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 324
      },
      hacklagLogo: {
        width: 324,
        height: 324,
        padding: 20
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -76,
        top: -404,
        width: 164,
        height: 114
      },
      hacklagLogoDivHidden: {
        visibility: 'hidden',
        opacity: 0,
        transition: 'visibility 2s, opacity 2s linear'
      },
      hacklagLogoDivVisible: {
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.5s, opacity 1s linear'
      }
    };
  },

  mouseOver() {
    this.setState({hover: true});
  },

  mouseOut() {
    this.setState({hover: false});
  },

  render() {
    const styles = this.getStyles();

    return (
      <div style={styles.logoBar}>
        <img
          style={styles.hacklagLogo}
          src={"/img/hacklag_sketch.png"}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          alt="Hacklag logo" />
        <div style={this.state.hover ? styles.hacklagLogoDivVisible : styles.hacklagLogoDivHidden}>
          <img
            style={styles.hacklagLogoDialog}
            src={"/img/hackbat_hi.png"}
            alt="Hi! I`m Hackabat!" />
        </div>
      </div>
    );
  }
}));
