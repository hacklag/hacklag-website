/**
*
* Sponsors
*
*/

import React from 'react';
import { Link } from 'react-router';
import styles from './styles.scss';

import InstapageImg from './img/instapage.png';
import PageProImg from './img/pagepro.png';
import SyncanoImg from './img/syncano.png';
import GGCImg from './img/ggc.png';
import PMBImg from './img/pmb.png';
import AexolImg from './img/aexol.png';
import NadaktywniImg from './img/nadaktywni.png';
import MobileBialystokImg from './img/mobile-bialystok.png';

export default () => (
  <div className={styles.Section}>
    <div className="wrapper">
      <div className={styles.Section__content}>
        <h2 className={styles.Section__title}>Meet our awesome sponsors</h2>
        <h3 className={styles.Section__tagline}>We’re non-profit organisation so we need your help to stay alive.</h3>

        <div className={styles.Sponsors}>
          <div>
            <img src={SyncanoImg} alt="Syncano" />
          </div>
          <div>
            <img src={PageProImg} alt="PagePro" />
            <img src={InstapageImg} alt="Instapage" />
          </div>
        </div>

        <div className={styles.Section__buttons}>
          <Link className="Btn Btn--secondary" to="/sponsors">View all sponsors</Link>
          <Link className="Btn Btn--primary ml" to="/become-sponsor">Become a sponsor</Link>
        </div>

        <div className={styles.Section__separator}></div>

        <h2 className={styles.Section__title}>And our fabulous partners</h2>
        <h3 className={styles.Section__tagline}>Together we can achieve much more!</h3>

        <div className={styles.Partners}>
          <img src={GGCImg} alt="Girls Geeks Carrots" />
          <img src={NadaktywniImg} alt="Nadaktywni" />
          <img src={AexolImg} alt="Aexol" />
          <img src={PMBImg} alt="PMB" />
          <img src={MobileBialystokImg} alt="Mobile Białystok" />
        </div>
      </div>
      {/* /.Section__content */}
    </div>
    {/* /.wrapper */}
  </div>
);
