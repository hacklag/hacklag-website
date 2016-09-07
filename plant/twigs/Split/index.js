import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

export default class Split extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    return (
      <div>
        <div className={cn('Split', this.props.className)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
