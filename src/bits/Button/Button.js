import React, { PropTypes } from 'react';
import cn from 'classnames';

const Button = ({ children, className, ...rest }) => (
  <button {...rest} className={cn('Btn', className)}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Button;
