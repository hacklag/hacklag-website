import React, { PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Split = ({
  className,
  children,
}) => (
  <div>
    <div className={cn('Split', className)}>
      {children}
    </div>
  </div>
);

Split.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Split;
