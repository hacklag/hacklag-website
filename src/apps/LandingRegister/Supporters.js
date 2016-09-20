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
    },
    longLogo: {
      width: 180,
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
          href="https://www.facebook.com/groups/121396568034497/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/gcc_logo_poziom.png"
            alt="Geek Girls Carrots" />
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
          href="http://przetworniameblowa.pl/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/pmb.png"
            alt="PMB" />
        </a>
        <a
          href="http://www.nadaktywni.org/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/nadaktywni.png"
            alt="Nadaktywni" />
        </a>
        <a
          href="https://www.facebook.com/mobilebialystok"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/mobileBstok.png"
            alt="Mobile Bilystok" />
        </a>
        <a
          href="http://pagepro.co/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/pagepro.png"
            alt="Pagepro" />
        </a>
        <a
          href="http://www.aexol.com/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/aexol.svg"
            alt="Aexol" />
        </a>
        <a
          href="https://instapage.com/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/instapage.svg"
            alt="Instapage" />
        </a>
        <a
          href="http://eastrobo.pl/"
          target="_blank" >
          <img
            style={styles.logo}
            src="/img/supporters/eastrobo.png"
            alt="Eastrobo" />
        </a>
        <a
          href="http://www.chimeraprime.com/"
          target="_blank" >
          <img
            style={styles.longLogo}
            src="/img/supporters/chimera.png"
            alt="Chimera Prime" />
        </a>
      </div>
    </div>
  );
};
