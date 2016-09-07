import React, { Component, PropTypes } from 'react';
import styles from './styles.scss';

const cn = require('classnames/bind').bind(styles);

export default class Join extends Component {
  static propTypes = {
    children: PropTypes.node,
    vAlign: PropTypes.string,
    spacing: PropTypes.string,
    className: PropTypes.string,
  }

  render() {
    const {
      spacing = 'md',
      vAlign = 'top',
    } = this.props;

    return (
      <div className={cn('Join', this.props.className, vAlign, spacing)}>
        {this.props.children}
      </div>
    );
  }
}
