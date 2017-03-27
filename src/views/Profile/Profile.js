import React, { PropTypes } from 'react';
import { Wrapper } from 'bits';
import { Header, Footer, Profile } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  services: { user: { getuser } },
}) => {
  getuser(localStorage.getItem('userKey'));
  return (
    <div className={cn('Landing')}>
      <Header />

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="profile">
            <Profile />
          </div>
        </Wrapper>
      </div>

      <Footer />
    </div>
  );
};

Landing.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Landing, { tracker: {} });
