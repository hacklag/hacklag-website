import React from 'react';
import MUI from 'material-ui';
import {Link} from 'react-router';

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
        textAlign: 'center',
        margin: '0 -9999rem'
      }
    };
  },

  render() {
    let styles = this.getStyles();

    return (
      <div style={styles.mainFotter}>
        <Link to="app">Home </Link>
        <Link to="events">Events </Link>
        <Link to="community">Community </Link>
        <Link to="donate">Donate </Link>
        <Link to="sponsors">Sponsors </Link>
        <Link to="faq">FAQ </Link>
        <Link to="about">About </Link><br/>
        2016 ® Hacklag
      </div>
    );
  }
});
