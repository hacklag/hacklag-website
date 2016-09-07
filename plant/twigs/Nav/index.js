import React, { Children, Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

export default class Nav extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  }

  render() {
    const { className, children } = this.props;

    return (
      <ul className={cn('Nav', className)}>
        {Children.map(children, child => (
          <li className={cn('Nav__item')}>{child}</li>
        ))}
      </ul>
    );
  }
}
