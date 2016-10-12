import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

import Feature1Img from './images/feature-1.png';
import Feature2Img from './images/feature-2.png';
import Feature3Img from './images/feature-3.png';

const Features = () => (
  <div className={cn('Features')}>
    <div className={cn('Features__item')}>
      <div className={cn('Features__image')}>
        <img src={Feature1Img} role="presentation" width="61" height="66" />
      </div>
      <h2 className={cn('Features__title')}>
        International organization
      </h2>
      <p className={cn('Features__content')}>
        Our members are from different places all over the world. We use english in our whole communication.
      </p>
    </div>
    {/* /.Feature__item */}
    <div className={cn('Features__item')}>
      <div className={cn('Features__image')}>
        <img src={Feature2Img} role="presentation" width="45" height="67" />
      </div>
      <h2 className={cn('Features__title')}>
        Open space offices
      </h2>
      <p className={cn('Features__content')}>
        In every workspace we have a lot of space for collaboration. Our members can choose from <b>hotdesks</b> or rent their own desk.
      </p>
    </div>
    {/* /.Feature__item */}
    <div className={cn('Features__item')}>
      <div className={cn('Features__image')}>
        <img src={Feature3Img} role="presentation" width="58" height="58" />
      </div>
      <h2 className={cn('Features__title')}>
        Epic events
      </h2>
      <p className={cn('Features__content')}>
        We support local communities by sharing our workspace for different types of events: meetups, workshops and parties ;)
      </p>
    </div>
  </div>
);

Features.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Features);
