import React, { PropTypes } from 'react';
import { Split, Wrapper, Icon } from 'bits';
import { connect } from 'utils';
import { Follow } from 'react-twitter-widgets';
import FacebookProvider, { Like } from 'react-facebook';
import styles from './styles.css';
import GoogleMap from 'google-map-react';
const cn = require('classnames/bind').bind(styles);

const Footer = ({
  services: {
    ui: { toggleModal },
  },
}) => (
  <div className={cn('Footer')}>
    <Wrapper className={cn('Footer__box')}>
      <div className={cn('Footer__items')}>
        <div className={cn('Footer__item')}>
          <Icon className={cn('Footer__item-icon')} name="map-marker" />
          <div className={cn('Footer__item-content')}>
            Sienkiewicza 1/1, lok. 200 <br />
            Białystok, Poland
          </div>
        </div>
        <div className={cn('Footer__item')}>
          <Icon className={cn('Footer__item-icon')} name="envelope" />
          <div className={cn('Footer__item-content')}>
            Call us at <a href="callto:+4791908036"><b>+47 919 08 036</b></a><br />
            Email at <a href="mailto:hello@hacklag.org"><b>hello@hacklag.org</b></a>
          </div>
        </div>
        <div className={cn('Footer__item')}>
          <Icon className={cn('Footer__item-icon')} name="github" />
          <div className={cn('Footer__item-content')}>
            Code with us at <br />
            <a href="https://github.com/hacklag">github.com/<b>hacklag</b></a>
          </div>
        </div>
        <div className={cn('Footer__item')}>
          <Icon className={cn('Footer__item-icon')} name="slack" />
          <div className={cn('Footer__item-content')}>
            <a onClick={() => toggleModal('CommunityMemberSignup')}>
              Join <b>HACKLAG</b>
            </a>
            <br /> community on Slack
          </div>
        </div>
      </div>
      <Split>
        <div className={cn('Footer__copyrights')}>
          &copy; 2016 by Hacklag. All rights reserved.
        </div>
        <div className={cn('Footer__social')}>
          <FacebookProvider appID="1108028089293935">
            <Like href="https://www.facebook.com/HacklagHQ" action="like" size="small" showFaces={false} share={false} layout="button" colorScheme="light" />
          </FacebookProvider>
          <Follow
            username="HacklagHQ"
            options={{ showCount: false }}
          />
        </div>
      </Split>
    </Wrapper>
    <div className={cn('Footer__map')}>
      <GoogleMap
        bootstrapURLKeys={{
          key: GOOGLE_MAPS_API_KEY,
        }}
        defaultCenter={{ lat: 53.1302151, lng: 23.1595374 }}
        defaultZoom={17}
      >
        <div
          lat={53.1311871}
          lng={23.1581426}
        >
          <img
            width={'100px'}
            role={'presentation'}
            src={'http://i.imgur.com/fYrxDeK.png'}
          />
        </div>
      </GoogleMap>
    </div>
  </div>
);

Footer.propTypes = {
  services: PropTypes.object.isRequired,
};

export default connect(Footer);
