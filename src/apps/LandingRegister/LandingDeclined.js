import React from 'react';
import Radium from 'radium';

export default Radium(() => {
  const styles = {
    content: {
      maxWidth: 450,
      fontFamily: 'Raleway',
      fontWeight: 300,
      lineHeight: 1.6,
      textAlign: 'justify',
      fontSize: 16
    },
    supportText: {
      fontSize: 21,
      fontWeight: 400
    }
  };

  return (
      <div style={styles.content}>
        Something went wrong...
        <br/>
        <br/>
        <span style={styles.supportText}>
          We will contact you shortly.
        </span>
      </div>
    );
});
