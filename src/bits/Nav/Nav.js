import React, { Children, PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Nav = ({
  className = '',
  children,
}) => (
  <ul className={cn('Nav', className.split(' '))}>
    {Children.map(children, child => (
      <li className={cn('Nav__item')}>{child}</li>
    ))}
  </ul>
);

Nav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Nav;
