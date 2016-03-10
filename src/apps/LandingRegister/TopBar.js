import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({

  propTypes: {
    logo: React.PropTypes.element.isRequired,
    cloud: React.PropTypes.bool
  },

  getInitialState() {
    return {
      touch: false
    };
  },

  getDefaultProps() {
    return {
      cloud: true
    };
  },

  getStyles() {
    return {
      logoBar: {
        display: 'none',
        '@media (max-width: 750px)': {
          display: 'flex',
          flexDirection: 'column'
        }
      },
      hacklagLogo: {
        marginRight: 'auto',
        marginLeft: 'auto'
      },
      hacklagLogoDialog: {
        width: 78,
        position: 'relative',
        right: 128
      },
      hacklagLogoDivHidden: {
        width: 0,
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        margin: '0 auto 27px auto',
        transition: 'visibility 2s, opacity 2s linear'
      },
      hacklagLogoDivVisible: {
        width: 0,
        height: 0,
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.5s, opacity 1s linear',
        margin: '0 auto 27px auto'
      }
    };
  },

  mouseOver() {
    this.setState({touch: true});
  },

  mouseOut() {
    this.setState({touch: false});
  },

  render() {
    const styles = this.getStyles();
    const img = require('../../assets/img/hackbat/' + this.props.logo);

    return (
      <div
        style={styles.logoBar}
        onTouchStart={() => this.setState({touch: true})}>
        <div style={(this.state.touch && this.props.cloud)
            ? styles.hacklagLogoDivVisible : styles.hacklagLogoDivHidden}>
          <img
            style={styles.hacklagLogoDialog}
            src={"/img/hackbat/hackbat_cloud.png"}
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
