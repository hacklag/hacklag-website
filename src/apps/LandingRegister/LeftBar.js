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
      hovered: false
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
      logoDialog: {
        position: 'relative',
        left: -74,
        top: -53,
        width: 119,
        height: 77
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
            src={"/img/hackbat/hackbat_cloud.png"}
            alt="Hi! I`m Hackabat!" />
        </div>
        <img
          style={styles.hacklagLogo}
          src={require(`../../assets/img/hackbat/${logo}`)}
          onMouseOver={() => this.setState({hovered: true})}
          onMouseOut={() => this.setState({hovered: false})}
          alt="Hacklag logo" />
      </div>
    );
  }
}));
