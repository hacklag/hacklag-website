import React, { PropTypes } from 'react';

const Icon = ({
  name,
  className,
}) => (
  <i className={`fa fa-${name} ${className}`}></i>
);

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
