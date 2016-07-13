import React from 'react';
import styles from './styles.scss';
import Icon from 'react-fontawesome';
import cx from 'classnames';

export default () => (
  <div className={styles.Footer}>
    <div className={cx('wrapper', styles.Footer__inner)}>
      <div className={styles.Footer__copyrights}>
        &copy; 2016 by Hacklag. All rights reserved.
      </div>
      <div className={styles.Footer__icons}>
        <a href="https://www.facebook.com/HacklagHQ">
          <Icon name="facebook-square" />
        </a>
        <a href="https://www.facebook.com/HacklagHQ">
          <Icon name="twitter-square" />
        </a>
        <a href="https://www.facebook.com/HacklagHQ">
          <Icon name="github-square" />
        </a>
        <a href="https://hacklag.slack.com">
          <Icon name="slack" />
        </a>
      </div>
    </div>
    {/* /.wrapper */}
  </div>
);
