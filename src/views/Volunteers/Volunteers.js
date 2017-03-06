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
              <Volunteer name={'Menelaos Midas'} joined={'21/12/02'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
              <Volunteer name={'Jennifer D. Martin'} joined={'21/12/02'} badge position={'Staff'} img={'https://randomuser.me/api/portraits/men/81.jpg'} />
              <Volunteer name={'Mitchell L. Geisler'} joined={'21/12/02'} position={'staff'} img={'https://s3.amazonaws.com/uifaces/faces/twitter/andyvitale/128.jpg'} />
              <Volunteer name={'Miloš Mánek'} joined={'21/12/02'} badge position={'staff'} img={'https://randomuser.me/api/portraits/men/21.jpg'} />
              <Volunteer name={'Arne Tollefsen'} joined={'21/12/02'} position={'staff'} img={'https://randomuser.me/api/portraits/men/74.jpg'} />
              <Volunteer name={'Christoffer Mohamed'} joined={'21/12/02'} badge position={'staff'} img={'https://randomuser.me/api/portraits/men/75.jpg'} />
              <Volunteer name={'Iver Normann'} joined={'21/12/02'} position={'staff'} img={'https://randomuser.me/api/portraits/men/35.jpg'} />
              <Volunteer name={'Brage Myrvang'} joined={'21/12/02'} badge position={'staff'} img={'https://randomuser.me/api/portraits/men/79.jpg'} />
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
