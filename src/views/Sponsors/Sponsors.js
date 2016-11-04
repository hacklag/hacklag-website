import React, { PropTypes } from 'react';
import { Wrapper, Join } from 'bits';
import { Header, Sponsors, Footer } from 'bytes';
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
            <h2 className={cn('Section__title')}>All of our awesome sponsors</h2>
            <h3 className={cn('Section__tagline')}>We're non-profit organisation so we need your help to stay alive.</h3>
            <Sponsors all />

            <Join className="u-ta-c" spacing="sm">
              <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Become a sponsor</a>
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
