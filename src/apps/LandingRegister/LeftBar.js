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
        marginTop: 53.8
      },
      hacklagLogo: {
        width: 165.3,
        height: 158.2
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -91,
        top: -207,
        width: 118,
        height: 76
      },
      hacklagLogoDivHidden: {
        width: 0,
        height: 0,
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
