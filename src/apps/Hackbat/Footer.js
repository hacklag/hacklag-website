import React from 'react';
import Radium from 'radium';

export default Radium(() => {
  const city = require('../../assets/img/hackbat/city.png');
  const styles = {
    footerDiv: {
      display: 'flex',
      justifyContent: 'center',
      height: 40,
      alignItems: 'flex-end',
      color: 'whitesmoke',
      fontFamily: 'Roboto',
      fontSize: 12,
      fontWeight: 300,
      lineHeight: '16px',
      position: 'relative'
    },
    image: {
      width: '100%',
      zIndex: -1
    },
    text: {
      position: 'absolute',
      left: '50%'
    }
  };

  return (
    <div style={styles.footerDiv}>
    <img
        style={styles.image}
        src={city}
        alt="Hacklag logo" />
      <span style={styles.text}>2016 Hacklag Foundation</span>
    </div>
  );
});
