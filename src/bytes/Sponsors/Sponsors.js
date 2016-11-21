import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Sponsors = ({
  store: {
    data: {
      sponsors = [],
    },
  },
}) => (
  <div className={cn('Sponsors')}>
    <div className={cn('Sponsors__item', 'isPlatinum')}>
      <div className={cn('Sponsors__item-content')}>
        <div className={cn('Sponsors__item-content-wrapper')}>
          <img
            className={cn('Sponsors__item-logo')}
            alt={sponsors[0] && sponsors[0].name}
            src={sponsors[0] && sponsors[0].logo.value}
          />
        </div>
      </div>
    </div>
    <div className={cn('Sponsors__item', 'isGold')}>
    {
      Array.from(Array(2).keys()).map((index) => (
        <div key={index + 1} className={cn('Sponsors__item-content')}>
          <div className={cn('Sponsors__item-content-wrapper')}>
            <img
              className={cn('Sponsors__item-logo')}
              alt={sponsors[index + 1] && sponsors[index + 1].name}
              src={sponsors[index + 1] && sponsors[index + 1].logo.value}
            />
          </div>
        </div>
      ))
    }
    </div>
    <div className={cn('Sponsors__item', 'isSilver')}>
    {
      Array.from(Array(3).keys()).map((index) => (
        <div key={index + 3} className={cn('Sponsors__item-content')}>
          <div className={cn('Sponsors__item-content-wrapper')}>
            {sponsors[index + 3] &&
              <img
                className={cn('Sponsors__item-logo')}
                alt={sponsors[index + 3].name}
                src={sponsors[index + 3].logo.value}
              />
            }
          </div>
        </div>
      ))
    }
    </div>
    <div className={cn('Sponsors__item', 'isBronze')}>
    {
      Array.from(Array(4).keys()).map((index) => (
        <div key={index + 6} className={cn('Sponsors__item-content')}>
          <div className={cn('Sponsors__item-content-wrapper')}>
            {sponsors[index + 6] &&
              <img
                className={cn('Sponsors__item-logo')}
                alt={sponsors[index + 6].name}
                src={sponsors[index + 6].logo.value}
              />
            }
          </div>
        </div>
      ))
    }
    </div>
  </div>
);

Sponsors.propTypes = {
  all: PropTypes.bool,
  store: PropTypes.object.isRequired,
};

export default connect(Sponsors);
