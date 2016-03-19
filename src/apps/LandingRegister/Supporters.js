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
    <div style={{maxWidth: 450}}>
      <div style={styles.text}>Our supporters:</div>
      <div style={styles.images}>
        <a
          href="https://www.facebook.com/explorerhq"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/explorerhq.png"
            alt="ExplorerHQ" />
        </a>
        <a
          href="http://pystok.org/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/pystok.png"
            alt="Pystok" />
        </a>
        <a
          href="https://www.syncano.io/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/syncano.png"
            alt="Syncano" />
        </a>
        <a
          href="http://przetworniameblowa.pl/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/pmb.png"
            alt="PMB" />
        </a>
        <a
          href="https://www.facebook.com/groups/bstoknet/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/bstoknet.png"
            alt="#bstoknet" />
        </a>
        <a
          href="https://www.facebook.com/mobilebialystok"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/mobileBstok.png"
            alt="Mobile Bilystok" />
        </a>
      </div>
    </div>
  );
};
