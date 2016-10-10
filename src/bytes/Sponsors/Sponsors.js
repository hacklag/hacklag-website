import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Sponsors = ({
  all = false,
  store: {
    data: {
      sponsors = [],
    },
  },
}) => (
  <div className={cn('Sponsors')}>
    {sponsors.length ? [
      <div key="1" className={cn('Sponsors__item', 'Sponsors__item--platinum')}>
        <a href={sponsors[0].url} target="_blank">
          <img src={sponsors[0].logo.value} alt={sponsors[0].name} />
        </a>
      </div>,
      <div key="2" className={cn('Sponsors__item', 'Sponsors__item--gold')}>
        <a href={sponsors[1].url} target="_blank">
          <img src={sponsors[1].logo.value} alt={sponsors[1].name} />
        </a>
        <a href={sponsors[2].url} target="_blank">
          <img src={sponsors[2].logo.value} alt={sponsors[2].name} />
        </a>
      </div>,
    ] : null}

    {all && (
      <div className={cn('Sponsors__item--other')}>
        {sponsors.slice(3).map((sponsor, key) => (
          <a href={sponsor.url} target="_blank" key={key}>
            <img src={sponsor.logo.value} alt={sponsor.name} key={key} />
          </a>
        ))}
      </div>
    )}
  </div>
);

Sponsors.propTypes = {
  all: PropTypes.bool,
  store: PropTypes.object.isRequired,
};

export default connect(Sponsors);
