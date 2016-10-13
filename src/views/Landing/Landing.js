import React, { PropTypes } from 'react';
import { Wrapper, Join, Link, Modal } from 'bits';
import {
  Header, Features, Sponsors, Founders, Partners, Timeline, Plans,
  OfficeFeatures, Footer, SignupForm,
} from 'bytes';
import { Follow } from 'react-twitter-widgets';
import FacebookProvider, { Like } from 'react-facebook';
import { connect, segment } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Landing = ({
  services: {
    data: { fetchTweets, fetchEvents, fetchConnections },
  },
}) => {
  fetchTweets();
  fetchEvents();
  fetchConnections();

  return (
    <div className={cn('Landing')}>
      <Header>
        <div className={cn('Landing__header')}>
          <h1 className={cn('Landing__header-title')}>
            <b>HACKLAG</b> is a <b>community</b> aiming to connect <b>technology enthusiasts</b> by organizing <b>creative workspaces</b>.
          </h1>
          <div className={cn('Landing__header-subline')}>
            Sounds good?
          </div>
          <a className="Btn Btn--primary" href="#offices">Join us!</a>
        </div>
        {/* ./Landing__header */}

        <Features />
      </Header>

      <div className={cn('Section', 'Section--primary')}>
        <Wrapper>
          <div className={cn('Section__content')} id="sponsors">
            <h2 className={cn('Section__title')}>Meet our awesome sponsors</h2>
            <h3 className={cn('Section__tagline')}>We're non-profit organisation so we need your help to stay alive.</h3>
            <Sponsors />

            <Join className="u-ta-c" spacing="sm">
              <Link className="Btn Btn--secondary" to="/sponsors">View all sponsors</Link>
              <a className="Btn Btn--primary" href="mailto:sponsorship@hacklag.org">Become a sponsor</a>
            </Join>

            <div className={cn('Section__separator')}></div>
            <h2 className={cn('Section__title')}>Founders</h2>
            <h3 className={cn('Section__tagline')}>We wouldn't be here if they hadn't started it!</h3>
            <Founders />

            <div className={cn('Section__separator')}></div>
            <h2 className={cn('Section__title')}>And our fabulous partners</h2>
            <h3 className={cn('Section__tagline')}>Together we can achieve much more!</h3>
            <Partners />
          </div>
        </Wrapper>
      </div>

      <div className={cn('Section', 'Section--secondary')} id="events">
        <Wrapper>
          <Timeline />

          <h3 className={cn('Section__social-title')}>Pssst! Want to know more about HACKLAG?</h3>
          <div className={cn('Section__social')}>
            <FacebookProvider appID="1108028089293935">
              <Like href="https://www.facebook.com/HacklagHQ" action="like" size="small" showFaces={false} share={false} layout="button" colorScheme="light" />
            </FacebookProvider>
            <Follow
              username="HacklagHQ"
              options={{ showCount: false }}
            />
          </div>
        </Wrapper>
      </div>
      <div className={cn('Section', 'Section--tertiary')} id="offices">
        <Wrapper>
          <h2 className={cn('Section__title')}>We work and have fun in awesome workspace!</h2>
          <h3 className={cn('Section__tagline')}>And you can work there too.</h3>
          <OfficeFeatures />
          <Plans />
        </Wrapper>
      </div>
      {/* /.Section */}

      <Footer />

      <Modal name="CommunityMemberSignup" title="Join us">
        <SignupForm />
      </Modal>
    </div>
  );
};

Landing.propTypes = {
  store: PropTypes.object.isRequired,
  services: PropTypes.object.isRequired,
};

export default connect(Landing, { segment: {} });
