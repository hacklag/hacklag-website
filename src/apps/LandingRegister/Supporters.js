import React from 'react';

export default () => {
  const styles = {
    text: {
      fontSize: 12,
      fontWeight: 300,
      lineHeight: '21px',
      marginBottom: 16
    },
    logo: {
      height: 60,
      marginRight: 16,
      marginBottom: 16
    }
  };

  return (
    <div>
      <div style={styles.text}>Our supporters:</div>
      <div style={styles.images}>
        <a
          href="https://www.facebook.com/explorerhq"
          target="_blank" >
          <img
            style={styles.logo}
            src={require('../../assets/img/supporters/explorerhq.png')}
            alt="ExplorerHQ" />
        </a>
        <a
          href="http://pystok.org/"
          target="_blank" >
          <img
            style={styles.logo}
            src={require('../../assets/img/supporters/pystok.png')}
            alt="Pystok" />
        </a>
        <a
          href="https://www.syncano.io/"
          target="_blank" >
          <img
            style={styles.logo}
            src={require('../../assets/img/supporters/syncano.png')}
            alt="Syncano" />
        </a>
        <a
          href="#d"
          target="_blank" >
          <img
            style={styles.logo}
            src={require('../../assets/img/supporters/pmb.png')}
            alt="PMB" />
        </a>
        <a
          href="https://www.facebook.com/groups/bstoknet/"
          target="_blank" >
          <img
            style={styles.logo}
            src={require('../../assets/img/supporters/bstoknet.png')}
            alt="#bstoknet" />
        </a>
      </div>
    </div>
  );
};
