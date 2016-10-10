import React, { PropTypes } from 'react';
import { moment, connect } from 'utils';
import styles from './styles.css';

const cn = require('classnames/bind').bind(styles);

const CALENDAR_URL = 'https://calendar.google.com/calendar/embed?src=hacklag.org_aqt391ob3q7uj2lle7d6flknvg%40group.calendar.google.com';

const Timeline = ({
  store: {
    data: {
      tweets = [],
      events = [],
    },
  },
}) => (
  <div className={cn('Timeline')}>
    <div className={cn('Timeline__section')}>
      <div className={cn('Timeline__description')}>
        <h2 className={cn('Timeline__title')}>
          Brace yourself, <div>epic events are comming!</div>
        </h2>
        <h3 className={cn('Timeline__tagline')}>
          We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
        </h3>
        <a className="Btn Btn--primary" href={CALENDAR_URL}>View all events</a>
      </div>

      <div className={cn('Timeline__line')}>
        {events.map((item, index) => (
          <div key={index} className={cn('Timeline__item', 'Timeline__item--right')}>
            <div className={cn('Timeline__item-title')}>{item.summary}</div>
            <div className={cn('Timeline__item-date')}>{
              item.start.dateTime ?
                moment(item.start.dateTime).format('D MMMM [at] HH:mm') :
                moment(item.start.date).format('D MMMM')
            }</div>
          </div>
        ))}
        {Array.from(new Array(Math.abs(3 - events.length))).map((i, index) => (
          <div key={index} className={cn('Timeline__item', 'Timeline__item--right', 'Timeline__item--bare')} />
        ))}
      </div>
    </div>
    {/* /.Timeline__section */}

    <div className={cn('Timeline__section')}>
      <div className={cn('Timeline__description', 'Timeline__description--right')}>
        <h2 className={cn('Timeline__title')}>
          Oh, look! <div>People are talking about us</div>
        </h2>
        <h3 className={cn('Timeline__tagline')}>
          We like to actively spend our time by hosting events, working on projects or just hanging out together. Check out what’s comming.
        </h3>
        <a className="Btn Btn--primary" href="https://twitter.com/HacklagHQ">Check our Twitter</a>
      </div>

      <div className={cn('Timeline__line')}>
        {tweets.map((item, index) => (
          <div key={index} className={cn('Timeline__item', 'Timeline__item--left', 'Timeline__item--tweet')}>
            <a href={item.user_url}>
              <img className={cn('Timeline__item-image')} src={item.user_image} role="presentation" />
            </a>
            <div className={cn('Timeline__item-title')}>
              <a href={item.user_url} className={cn('Timeline__item-username')}>{item.user_name}</a> &sdot;
              <a href={item.tweet_url} className={cn('Timeline__item-meta')}>
                {' '}
                {moment(item.tweet_date.value).format('MMM D')}
              </a>
            </div>
            <div
              className={cn('Timeline__item-content')}
              dangerouslySetInnerHTML={{ __html: item.tweet_text }}
            />
          </div>
        ))}
        {Array.from(new Array(Math.abs(3 - tweets.length))).map((i, index) => (
          <div key={index} className={cn('Timeline__item', 'Timeline__item--left', 'Timeline__item--bare')} />
        ))}
      </div>
    </div>
    {/* /.Timeline__section */}
  </div>
);

Timeline.propTypes = {
  store: PropTypes.object.isRequired,
};

export default connect(Timeline);
