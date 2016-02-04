import React from 'react';
import MUI from 'material-ui';

export default React.createClass({

  displayName: 'EmptyContainer',

  propTypes: {
    style: React.PropTypes.object,
    icon: React.PropTypes.string,
    text: React.PropTypes.string
  },

  mixins: [MUI.Utils.Styles],

  getStyles() {
    return {
      container: {
        margin: '64px auto',
        textAlign: 'center'
      },
      icon: {
        fontSize: 96,
        lineHeight: 1,
        marginBottom: 16,
        color: 'rgba(0, 0, 0, 0.24)'
      },
      text: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontSize: 34,
        margin: 0
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.container}>
        <MUI.FontIcon
          style={styles.icon}
          className={this.props.icon}/>

        <p style={styles.text}>{this.props.text}</p>
      </div>
    );
  }
});
