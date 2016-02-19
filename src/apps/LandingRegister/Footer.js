import React from 'react';
import Radium from 'radium';

export default Radium(() => {
  const styles = {
    footerDiv: {
      display: 'flex',
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
      height: 40,
      marginTop: 40,
      width: '100%'
    }
  };

  return (
    <div style={styles.footerDiv}>
      2016 Hacklag Foundation
    </div>
  );
});
