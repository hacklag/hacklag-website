import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Founders = ({
  store: {
    data: {
      founders = [],
    },
  },
}) => (
  <div className={cn('Founders')}>
    {founders.length ? [
      founders.map(founder => (
        <a href={founder.url} target="_blank">
          <img src={founder.logo.value} alt={founder.name} />
        </a>
      )),
    ] : null}
  </div>
);

Founders.propTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(Founders);
