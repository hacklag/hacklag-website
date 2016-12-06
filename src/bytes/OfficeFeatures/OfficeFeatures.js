import React, { PropTypes } from 'react';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const Plans = () => (
  <div className={cn('OfficeFeatures')}>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>Awesome community</h4>
      <p className={cn('OfficeFeatures__item-content')}>Meet technology enthusiasts, people willing to disrupt the status quo.  Join us to have fun by working on innovative projects.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>Premium location</h4>
      <p className={cn('OfficeFeatures__item-content')}>Our workspace is in the very center of Białystok.  It is very convenient location for work and after work fun.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>24/7 access</h4>
      <p className={cn('OfficeFeatures__item-content')}>24/7 access to the hotdesk, permanent desk or a private office for your team.</p>
    </div>

    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>High quality Wi-Fi</h4>
      <p className={cn('OfficeFeatures__item-content')}>We are using Ubiquiti UniFi® technology to deliver extraordinarily Wi-Fi network performance and coverage.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>Kitchen</h4>
      <p className={cn('OfficeFeatures__item-content')}>In our office, we have a well-equipped kitchen with a big table where you can enjoy your meal.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>Projectors & great audio</h4>
      <p className={cn('OfficeFeatures__item-content')}>We have two high-quality, wireless projectors with screens and 14 speakers placed around the workspace.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>Meeting rooms</h4>
      <p className={cn('OfficeFeatures__item-content')}>Small and big rooms for private conversations, team meetings and client appointments.</p>
    </div>
    <div className={cn('OfficeFeatures__item')}>
      <h4 className={cn('OfficeFeatures__item-title')}>
        IoT Lab
        <div className={cn('OfficeFeatures__item-badge')}>coming soon</div>
      </h4>
      <p className={cn('OfficeFeatures__item-content')}>In our lab you can play with Internet of Things or 3D printing. We have all the necessary tools.</p>
    </div>
  </div>
);

Plans.propTypes = {
  sponsors: PropTypes.array,
};

export default Plans;
