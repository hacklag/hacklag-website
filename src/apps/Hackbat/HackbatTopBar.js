import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({

  propTypes: {
    logo: React.PropTypes.element.isRequired,
    cloud: React.PropTypes.bool
  },

  getInitialState() {
    return {
      touched: false
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
          flexDirection: 'column',
          marginBottom: 24
        }
      },
      hacklagLogo: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 150
      },
      logoDialog: {
        width: 88,
        position: 'relative',
        right: 115
      },
      logoDivHidden: {
        width: 0,
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        margin: '0 auto 27px auto',
        transition: 'visibility 2s, opacity 2s linear'
      },
      logoDivVisible: {
        width: 0,
        height: 0,
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.5s, opacity 1s linear',
        margin: '0 auto 27px auto'
      }
    };
  },

  render() {
    const styles = this.getStyles();
    const {touched} = this.state;
    const {logo, cloud} = this.props;

    return (
      <div
        style={styles.logoBar}
        onTouchStart={() => this.setState({touched: true})}>
        <div style={(touched && cloud) ? styles.logoDivVisible : styles.logoDivHidden}>
          <img
            style={styles.logoDialog}
            src={"/img/hackbat/hackbat_cloud.svg"}
            alt="Hi! I'm Hackabat!" />
        </div>
        <img
          style={styles.hacklagLogo}
          src={'/img/hackbat/' + logo}
          onMouseOver={() => this.setState({touched: true})}
          onMouseOut={() => this.setState({touched: false})}
          alt="Hacklag logo" />
      </div>
    );
  }
}));
