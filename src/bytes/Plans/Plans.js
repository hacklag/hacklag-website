import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const PLAN_HOTDESK_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=f7ca61fc7a2d3d6f4b1b190858a60c56';
const PLAN_HOTDESK_PLUS_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=d5a026465e7d82761c6e2c4f174f61f4';
const PLAN_PERMAMENT_URL = 'https://bialystok.hacklag.org/membership_signup/new?plan_id=d67e8ace7b83af12dcfdc74905eb0811';

const Plans = ({
  services: {
    ui: { toggleModal },
  },
}) => (
  <div className={cn('Plans')}>
    <div className={cn('Plans__item', 'isAlpha')} onClick={() => toggleModal('CommunityMemberSignup')}>
      <div className={cn('Plans__item-inner')}>
        <h4 className={cn('Plans__item-title')}>Community Member</h4>
        <div className={cn('Plans__item-price')}>Free</div>
        <ul className={cn('Plans__features')}>
          <li>Slack and Forum access</li>
          <li>Meetups invitations</li>
        </ul>
        <button className={cn('Plans__item-button')}>Signup</button>
      </div>
    </div>
    {/* /.Plans__item */}

    <a className={cn('Plans__item', 'isBeta')} href={PLAN_HOTDESK_URL} rel="noopener noreferrer" target="_blank">
      <div className={cn('Plans__item-inner')}>
        <h4 className={cn('Plans__item-title')}>Hotdesk</h4>
        <div className={cn('Plans__item-price')}>300 PLN net per month</div>
        <ul className={cn('Plans__features')}>
          <li>24/7 access</li>
          <li>100 Mbit/s internet connection</li>
          <li>Coffee and snaks</li>
          <li>Unlimited Baroque room access</li>
        </ul>
        <button className={cn('Plans__item-button')}>Choose plan</button>
      </div>
    </a>
    {/* /.Plans__item */}

    <a className={cn('Plans__item', 'isGamma')} href={PLAN_HOTDESK_PLUS_URL} rel="noopener noreferrer" target="_blank">
      <div className={cn('Plans__item-inner')}>
        <h4 className={cn('Plans__item-title')}>Hotdesk Plus</h4>
        <div className={cn('Plans__item-price')}>400 PLN net per month</div>
        <ul className={cn('Plans__features')}>
          <li>24/7 access (all locations)</li>
          <li>200 Mbit/s internet connection</li>
          <li>Coffee and snaks</li>
          <li>Unlimited Baroque room access</li>
          <li>4 hours of meeting room access </li>
        </ul>
        <button className={cn('Plans__item-button')}>Choose plan</button>
      </div>
    </a>
    {/* /.Plans__item */}

    <a className={cn('Plans__item', 'isDelta')} href={PLAN_PERMAMENT_URL} rel="noopener noreferrer" target="_blank">
      <div className={cn('Plans__item-inner')}>
        <h4 className={cn('Plans__item-title')}>Permament Desk</h4>
        <div className={cn('Plans__item-price')}>500 PLN net per month</div>
        <ul className={cn('Plans__features')}>
          <li>24/7 access (all locations)</li>
          <li>200 Mbit/s internet connection</li>
          <li>Coffee and snaks</li>
          <li>Unlimited Baroque room access</li>
          <li>8 hours of meeting room access</li>
        </ul>
        <button className={cn('Plans__item-button')}>Choose plan</button>
      </div>
    </a>
    {/* /.Plans__item */}
  </div>
);

Plans.propTypes = {
  services: PropTypes.object.isRequired,
};

export default connect(Plans);
