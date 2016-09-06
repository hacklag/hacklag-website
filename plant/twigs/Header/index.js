import React, { Component, PropTypes } from 'react';
import { connect, observer } from 'utils';
import { Button, Link } from 'leafs';
import { Wrapper } from 'twigs';
import classNames from 'classnames/bind';
import styles from './styles.scss';

const cn = classNames.bind(styles);

@observer
@connect(({ uiRoot }) => ({
  language: uiRoot.language,
  setLanguage: uiRoot.setLanguage,
}))
export default class Header extends Component {
  static propTypes = {
    language: PropTypes.string,
    setLanguage: PropTypes.func,
  }

  render() {
    const { setLanguage, language } = this.props;

    return (
      <div className={cn('Header')}>
        <Wrapper className={cn('Header__inner')}>
          <div className={cn('Header__logo')}>
            <a href="/" className={cn('Header__logo-link')}>Logo</a>
          </div>

          <ul className={cn('Header__nav', 'Nav')}>
            <li className={cn('Nav__item')}>
              <Link className={cn('Nav__item-link')} to="/">Home</Link>
            </li>
            <li className={cn('Nav__item')}>
              <Link className={cn('Nav__item-link')} to="/about">About</Link>
            </li>
            <li className={cn('Nav__item')}>
              <Button
                className="btn--primary"
                onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
              >Toggle language</Button>
            </li>
          </ul>
        </Wrapper>
      </div>
    );
  }
}
