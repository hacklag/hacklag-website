import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Sponsors = ({
  all = false,
  store: {
    data: {
      sponsorsItems,
    },
  },
}) => (
  <div className={cn('Sponsors')}>
    {sponsorsItems.map((items, itemsIndex) => (
      <div key={itemsIndex} className={cn('Sponsors__item', {
        isPlatinum: itemsIndex === 0,
        isGold: (itemsIndex > 0 && itemsIndex < 2),
        isSilver: (itemsIndex >= 2 && itemsIndex < 6),
        isBronze: itemsIndex >= 6,
        isVisible: itemsIndex < 2 || all,
      })}>
        {Array.from(Array(
          itemsIndex < 3 ? itemsIndex + 1 : 4
        ).keys()).map((index) => (
          <div key={index} className={cn('Sponsors__item-content')}>
            <div className={cn('Sponsors__item-content-wrapper')}>
              <a href={items[index] && items[index].url} target="_blank" rel="noopener noreferrer">
                <img
                  className={cn('Sponsors__item-logo')}
                  alt={items[index] && items[index].name}
                  src={items[index] && items[index].logo.value}
                />
              </a>
            </div>
          </div>
        ))
      }
      </div>
    ))}
  </div>
);

Sponsors.propTypes = {
  all: PropTypes.bool,
  store: PropTypes.object.isRequired,
};

export default connect(Sponsors);
