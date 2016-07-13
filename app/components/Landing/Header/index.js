/**
*
* Header
*
*/

import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import styles from './styles.scss';
import HackbatImg from './img/hackbat.svg';
import Feature1Img from './img/feature-1.png';
import Feature2Img from './img/feature-2.png';
import Feature3Img from './img/feature-3.png';

export default () => (
  <div className={styles.Header}>
    <div className="wrapper">
      <div className={styles.Header__bar}>
        <ul className={styles.Nav}>
          <li className={styles.Nav__item}>
            <Link className={styles.Nav__link} to="/blog">Blog</Link>
          </li>
          <li className={styles.Nav__item}>
            <Link className={styles.Nav__link} to="/events">Events</Link>
          </li>
          <li className={styles.Nav__item}>
            <Link className={styles.Nav__link} to="/sponsors">Sponsors</Link>
          </li>
        </ul>
        {/* /.Nav */}

        <Link className={styles.Logo} to="/">
          <img src={HackbatImg} alt="HACKLAG" />
        </Link>

        <ul className={styles.Nav}>
          <li className={styles.Nav__item}>
            <Link className={styles.Nav__link} to="/auth/register">Create account</Link>
          </li>
          <li className={styles.Nav__item}>
            <Link className={styles.Nav__link} to="/auth/login">Sign In</Link>
          </li>
        </ul>
        {/* /.Nav */}
      </div>
      {/* /.Header__bar */}

      <div className={styles.Content}>
        <h1 className={styles.Content__headline}>
          HACKLAG is an international <b>community</b> aiming to connect <b>new technologies enthusiasts</b> by organizing <b>creative workspace</b>.
        </h1>
        <div className={styles.Content__subline}>
          Sounds good?
        </div>
        <Link className="Btn Btn--primary" to="/auth/register">Join us!</Link>
      </div>
      {/* /.Content */}

      <div className={cx('grid', styles.Features)}>
        <div className={styles.Features__item}>
          <div className={styles.Features__image}>
            <img src={Feature1Img} role="presentation" />
          </div>
          <h2 className={styles.Features__title}>
            International organization
          </h2>
          <p className={styles.Features__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod sollicitudin elit at sagittis. Nam ex mauris, posuere id mi ac, elementum luctus ante.
          </p>
          <Link className="Btn Btn--primary" to="/about">Learn more</Link>
        </div>
        <div className={styles.Features__item}>
          <div className={styles.Features__image}>
            <img src={Feature2Img} role="presentation" />
          </div>
          <h2 className={styles.Features__title}>
            Open space offices
          </h2>
          <p className={styles.Features__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod sollicitudin elit at sagittis. Nam ex mauris, posuere id mi ac, elementum luctus ante.
          </p>
          <Link className="Btn Btn--primary" to="/about">View offices</Link>
        </div>
        <div className={styles.Features__item}>
          <div className={styles.Features__image}>
            <img src={Feature3Img} role="presentation" />
          </div>
          <h2 className={styles.Features__title}>
            Epic events
          </h2>
          <p className={styles.Features__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus euismod sollicitudin elit at sagittis. Nam ex mauris, posuere id mi ac, elementum luctus ante.
          </p>
          <Link className="Btn Btn--primary" to="/about">Check events</Link>
        </div>
      </div>
      {/* /.Features */}
    </div>
    {/* /.wrapper */}
  </div>
);
