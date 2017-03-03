import React, { PropTypes } from 'react';
import { Wrapper, Join } from 'bits';
import { Header, Footer, Volunteer } from 'bytes';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  services: {
    data: { fetchConnections },
  },
}) => {
  fetchConnections();

  return (
    <div className={cn('Landing')}>
      <Header />

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="sponsors">
            <h2 className={cn('Section__title')}>Meet our Volunteers</h2>
            <h3 className={cn('Section__tagline')}>Those awesome guys help us build the HACKLAG community.</h3>
            <div className={cn('Volunteers__wrapper')}>
              <Volunteer name={'Kazik Radom'} joined={'21/12/02'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
              <Volunteer name={'Kazik Radom'} joined={'21/12/02'} badge position={'staff'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
              <Volunteer name={'Kazik Radom'} joined={'21/12/02'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
              <Volunteer name={'Kazik Radom'} joined={'21/12/02'} badge position={'staff'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
            </div>
            <Join className="u-ta-c" spacing="sm">
              <h3 className={cn('Section__tagline', 'Section__tagline-join')}>Want to join in and have some fun?</h3>
              <br />
              <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Become a Volunteer</a>
            </Join>
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
