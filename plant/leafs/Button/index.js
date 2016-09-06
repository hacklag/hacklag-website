import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

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
