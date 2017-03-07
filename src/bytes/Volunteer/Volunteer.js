import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Volunteer = ({
  img,
  badge = false,
  joined,
  name,
  position,
}) => (
  <div className={cn('Volunteer')}>
    {/* Picture and badge */}
    <div className={cn('Volunteer__picture')}>
      {badge ? <div className={cn('Volunteer__picture-badge')}><span>{position}</span></div> : null}
      <img src={img} alt="Profile of HACKLAG member" />
    </div>

    {/* Name */}
    <div className={cn('Volunteer__name')}>
      <span>{name}</span>
    </div>

    {/* Join Date */}
    <div className={cn('Volunteer__joined')}>
      <span>Joined: {joined}</span>
    </div>

  </div>
);

Volunteer.propTypes = {
  img: PropTypes.string,
  badge: PropTypes.bool,
  joined: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};

export default connect(Volunteer);
