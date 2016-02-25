import React from 'react';
import Radium from 'radium';
import {Link} from 'react-router';

export default Radium(() => {
  const styles = {
    mainFotter: {
      padding: '20px 0',
      borderTop: '1px solid #eceff2',
      color: '#565a5f',
      fontSize: 12,
      textAlign: 'center',
      margin: '0 -9999rem'
    },
    footerItem: {
      color: '#565A5F',
      whiteSpace: 'nowrap',
      transition: '0.2s ease',
      paddingRight: 10,
      ':hover': {
        color: '#38B7EA'
      }
    }
  };

  const RadiumLink = Radium(Link);

  return (
    <div style={styles.mainFotter}>
      <RadiumLink
        to="home"
        key="home"
        style={styles.footerItem}>
          Home
      </RadiumLink>
      <RadiumLink
        to="events"
        key="events"
        style={styles.footerItem}>
          Events
      </RadiumLink>
      <RadiumLink
        to="blog"
        key="blog"
        style={styles.footerItem}>
          Blog
      </RadiumLink>
      <RadiumLink
        to="about"
        key="about"
        style={styles.footerItem}>
          About
      </RadiumLink>
      <br/>
      2016 ® Hacklag
    </div>
  );
});
