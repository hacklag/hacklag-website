import React from 'react';
import Logo from '../../common/Logo';
import Menu from '../Menu';
import Radium from 'radium';

export default Radium(() => {
  const styles = {
    headerBackground: {
      backgroundColor: '#FFFFFF',
      margin: '0 -9999rem',
      padding: '0.25rem 9999rem',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-around',
      height: 50
    }
  };

  return (
    <div style={styles.headerBackground}>
      <div style={styles.header}>
        <Logo/>
        <Menu/>
      </div>
    </div>
  );
});
