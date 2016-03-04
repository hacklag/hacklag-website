import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  displayName: 'LeftBar',

  propTypes: {
    logo: React.PropTypes.element.isRequired
  },

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
        maxWidth: 200,
        '@media (max-width: 750px)': {
          display: 'none'
        }
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
    const img = require('../../assets/img/hackbat/' + this.props.logo);

    return (
      <div style={styles.logoBar}>
      <div style={this.state.hover ? styles.hacklagLogoDivVisible : styles.hacklagLogoDivHidden}>
          <img
            style={styles.hacklagLogoDialog}
            src={'/img/hackbat/hackbat_cloud.png'}
            alt="Hi! I`m Hackabat!" />
        </div>
        <img
          style={styles.hacklagLogo}
          src={img}
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          alt="Hacklag logo" />
      </div>
    );
  }
}));
