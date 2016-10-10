import React, { PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Join = ({
  spacing = 'md',
  vAlign = 'top',
  className = '',
  children,
}) => (
  <div className={cn('Join', className.split(' '), vAlign, spacing)}>
    {children}
  </div>
);

Join.propTypes = {
  children: PropTypes.node,
  vAlign: PropTypes.string,
  spacing: PropTypes.string,
  className: PropTypes.string,
};

export default Join;
