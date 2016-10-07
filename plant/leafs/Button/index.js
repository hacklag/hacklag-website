import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

export default class Button extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    return (
      <button
        {...this.props}
        className={cn('btn', this.props.className)}
      >
        {this.props.children}
      </button>
    );
  }
}
