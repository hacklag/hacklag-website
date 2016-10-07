import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
  static propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    return (
      <i className={`fa fa-${this.props.name} ${this.props.className}`}></i>
    );
  }
}
