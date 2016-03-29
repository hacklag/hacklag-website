import React from 'react';
import Radium from 'radium';

export default Radium(React.createClass({
  propTypes: {
    logo: React.PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      hovered: false
    };
  },

  getStyles() {
    return {
      logoBar: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 112,
        '@media (max-width: 750px)': {
          display: 'none'
        }
      },
      hacklagLogo: {
        marginRight: 'auto',
        marginLeft: 'auto',
        width: 321
      },
      logoDialog: {
        position: 'relative',
        right: 122,
        bottom: 112,
        height: 140
      },
      logoDivHidden: {
        width: 0,
        height: 0,
        visibility: 'hidden',
        opacity: 0,
        transition: 'visibility 2s, opacity 2s linear'
      },
      logoDivVisible: {
        width: 0,
        height: 0,
        visibility: 'visible',
        opacity: 1,
        transition: 'visibility 0.5s, opacity 1s linear'
      }
    };
  },

  render() {
    const styles = this.getStyles();
    const {hovered} = this.state;
    const {logo} = this.props;

    return (
      <div
        style={styles.logoBar}
        onTouchStart={() => this.setState({hovered: true})}>
      <div style={hovered ? styles.logoDivVisible : styles.logoDivHidden}>
          <img
            style={styles.logoDialog}
            src={'/img/hackbat/hackbat_cloud.svg'}
            alt="Hi! I`m Hackabat!" />
        </div>
        <img
          style={styles.hacklagLogo}
          src={require('../../assets/img/hackbat/' + logo)}
          onMouseOver={() => this.setState({hovered: true})}
          onMouseOut={() => this.setState({hovered: false})}
          alt="Hacklag logo" />
      </div>
    );
  }
}));
