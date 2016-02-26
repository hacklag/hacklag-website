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
        width: 200
      },
      hacklagLogo: {
        marginRight: 'auto',
        marginLeft: 'auto'
      },
      hacklagLogoDialog: {
        position: 'relative',
        left: -74,
        top: -53,
        width: 119,
        height: 77
      },
      hacklagLogoDivHidden: {
        width: 0,
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        transition: 'visibility 2s, opacity 2s linear'
      },
      hacklagLogoDivVisible: {
        width: 0,
        height: 0,
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
      <div style={this.state.hover ? styles.hacklagLogoDivVisible : styles.hacklagLogoDivHidden}>
          <img
            style={styles.hacklagLogoDialog}
            src={"/img/hackbat/hackbat_cloud.png"}
            alt="Hi! I`m Hackabat!" />
        </div>
        <img
          style={styles.hacklagLogo}
          src={"/img/hackbat/hackbat_bialystok.png"}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          alt="Hacklag logo" />
      </div>
    );
  }
}));
