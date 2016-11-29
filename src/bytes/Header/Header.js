import React, { PropTypes } from 'react';
import { Link, Wrapper, Nav } from 'bits';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

import HackbatImg from 'images/hackbat.svg';

const Header = ({
  services: {
    ui: { changeLocation },
  },
  children,
}) => (
  <div className={cn('Header')}>
    <Wrapper className={cn('Header__inner')}>
      <div className={cn('Header__bar')}>
        <Nav className={cn('Header__nav', 'Header__nav--first')}>
          <Link className={cn('Header__nav-link')} to="/">Home</Link>
          <a className={cn('Header__nav-link')} href="/#events">Events</a>
          <a className={cn('Header__nav-link')} href="https://medium.com/@hacklag">Blog</a>
          <a className={cn('Header__nav-link')} href="/#sponsors">Sponsors</a>
        </Nav>
        {/* /.Header__nav */}

        <div className={cn('Header__logo')}>
          <Link to="/" className={cn('Header__logo-link')}>
            <img className={cn('Header__logo-image')} src={HackbatImg} alt="HACKLAG" />
          </Link>
        </div>
        {/* /.Header__logo */}

        <Nav className={cn('Header__nav', 'Header__nav--last')}>
          <a className={cn('Header__nav-link')} href="http://bialystok.hacklag.org">Members area</a>
          <a role="button" className={cn('Header__nav-link')} onClick={() => changeLocation('Białystok')}>Białystok</a>
          <a role="button" className={cn('Header__nav-link')} onClick={() => changeLocation('Warsaw')}>Warszawa</a>
        </Nav>
      </div>
      {/* /.Header__bar */}

      {children}
    </Wrapper>
  </div>
);

Header.propTypes = {
  children: PropTypes.node,
  services: PropTypes.object.isRequired,
};

export default connect(Header);
