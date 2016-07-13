import React from 'react';
import { Link } from 'react-router';
import cx from 'classnames';
import styles from './styles.scss';

export default () => (
  <div className={styles.Section}>
    <div className="wrapper">
      <h2 className={styles.Section__title}>We work in awesome open space offices!</h2>
      <h3 className={styles.Section__tagline}>And you can work there too.</h3>

      <div className={styles.Features}>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Ulimited coffee & snacks</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>High quality Wi-Fi</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Projectors & great audio</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>

        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>24/7 access</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Versalite space</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Awesome community</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Meeting rooms</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>IoT Lab</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Lockers</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Silent zone</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Entertainment zone</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
        <div className={styles.Features__item}>
          <h4 className={styles.Features__itemTitle}>Hacklag radio</h4>
          <p className={styles.Features__itemContent}>Sed eu quam et diam ultrices accumsan id ac magna. Praesent convallis molestie ligula a ultricies. </p>
        </div>
      </div>
      {/* /.Features */}

      <div className={styles.Plans}>
        <div className={cx(styles.Plans__item, styles.isAlpha)}>
          <div className={styles.Plans__itemInner}>
            <h4 className={styles.Plans__itemTitle}>Volunteer Plan</h4>
            <div className={styles.Plans__itemPrice}>Free</div>
            <ul className={styles.Plans__features}>
              <li>Silent zone</li>
              <li>Wi-Fi</li>
              <li>Unlimited coffee</li>
              <li>Lockers</li>
            </ul>
            <Link className={styles.Plans__itemButton} to="/try-plan">Choose plan</Link>
          </div>
        </div>
        {/* /.Plans__item */}

        <div className={cx(styles.Plans__item, styles.isBeta)}>
          <div className={styles.Plans__itemInner}>
            <h4 className={styles.Plans__itemTitle}>Student  Plan</h4>
            <div className={styles.Plans__itemPrice}>$29 per worker per month</div>
            <ul className={styles.Plans__features}>
              <li>Silent zone</li>
              <li>Wi-Fi</li>
              <li>Unlimited coffee</li>
              <li>Lockers</li>
            </ul>
            <Link className={styles.Plans__itemButton} to="/try-plan">Choose plan</Link>
          </div>
        </div>
        {/* /.Plans__item */}

        <div className={cx(styles.Plans__item, styles.isGamma)}>
          <div className={styles.Plans__itemInner}>
            <h4 className={styles.Plans__itemTitle}>Regular Plan</h4>
            <div className={styles.Plans__itemPrice}>$59 per worker per month</div>
            <ul className={styles.Plans__features}>
              <li>Silent zone</li>
              <li>Wi-Fi</li>
              <li>Unlimited coffee</li>
              <li>Lockers</li>
            </ul>
            <Link className={styles.Plans__itemButton} to="/try-plan">Choose plan</Link>
          </div>
        </div>
        {/* /.Plans__item */}

        <div className={cx(styles.Plans__item, styles.isDelta)}>
          <div className={styles.Plans__itemInner}>
            <h4 className={styles.Plans__itemTitle}>Company Plan</h4>
            <div className={styles.Plans__itemPrice}>$49 per worker per month</div>
            <ul className={styles.Plans__features}>
              <li>Silent zone</li>
              <li>Wi-Fi</li>
              <li>Unlimited coffee</li>
              <li>Lockers</li>
            </ul>
            <Link className={styles.Plans__itemButton} to="/try-plan">Choose plan</Link>
          </div>
        </div>
        {/* /.Plans__item */}
      </div>
      {/* /.Plans */}

      <div className={styles.Section__more}>
        <Link className="Btn Btn--primary" to="/plans">Learn more</Link>
      </div>
    </div>
    {/* /.wrapper */}
  </div>
);
