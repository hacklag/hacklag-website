import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Partners = ({
  store: {
    data: {
      partners = [],
    },
  },
}) => (
  <div className={cn('Partners')}>
    {partners.length ? [
      partners.map(partner => (
        <a href={partner.url} target="_blank">
          <img src={partner.logo.value} alt={partner.name} />
        </a>
      )),
    ] : null}
  </div>
);

Partners.propTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(Partners);
