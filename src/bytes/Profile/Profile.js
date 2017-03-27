import React, { PropTypes } from 'react';
import { connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Profile = ({
  store: { user: { userData } },
}) => {
  console.log('tss');
  return (
    <div className={cn('Profile')}>
      {userData ?
        <div>
          <div className={cn('Profile--firstname')}>
            <h1>{userData.firstname}</h1>
          </div>
          <div className={cn('Profile--lastname')}>
            <h1>{userData.lastname}</h1>
          </div>
          {userData.isVolunteer ?
            <div className={cn('Profile--volunteer_badge')}></div> : 'null'}
        </div>
         : 'test'}
    </div>
); };

Profile.propTypes = {
  services: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default connect(Profile);
