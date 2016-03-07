import React from 'react';
import Radium from 'radium';

export default Radium(() => {
  const styles = {
    footerDiv: {
      display: 'flex',
      justifyContent: 'center',
      height: 40,
      alignItems: 'center'
    }
  };

  return (
    <div style={styles.footerDiv}>
      2016 Hacklag Foundation
    </div>
  );
});
