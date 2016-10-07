import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

export default class Wrapper extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    return (
      <div
        {...this.props}
        className={cn('Wrapper', this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}
