import React from 'react';
import MUI from 'material-ui';

export default React.createClass({
  displayName: 'Social',

  componentDidMount() {

  },

  getStyles() {
    return {
      mainFotter: {
        padding: '20px 0',
        borderTop: '1px solid #eceff2',
        color: '#565a5f',
        fontSize: 12,
        textAlign: 'center'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainFotter}>
        <a href="">Home </a>
        <a href="">Events </a>
        <a href="">Community </a>
        <a href="">Donate </a>
        <a href="">Sponsors </a>
        <a href="">FAQ </a>
        <a href="">About </a><br/>
        2016 ® Hacklag
      </div>
    );
  }
});
