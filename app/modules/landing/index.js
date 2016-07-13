/**
 * Dashboard actions */
import { Record } from 'immutable';

export const FETCH_EVENTS = 'app/Landing/FETCH_EVENTS';
export const fetchEvents = () => ({
  type: FETCH_EVENTS,
});

export const FETCH_EVENTS_SUCCESS = 'app/Landing/FETCH_EVENTS_SUCCESS';
export const eventsWereFetched = (events) => ({
  type: FETCH_EVENTS_SUCCESS,
  events,
});

export const FETCH_EVENTS_FAILURE = 'app/Landing/FETCH_EVENTS_FAILURE';
export const eventsWereNotFetched = (error) => ({
  type: FETCH_EVENTS_FAILURE,
  error,
});

export const FETCH_TWEETS = 'app/Landing/FETCH_TWEETS';
export const fetchTweets = () => ({
  type: FETCH_TWEETS,
});

export const FETCH_TWEETS_SUCCESS = 'app/Landing/FETCH_TWEETS_SUCCESS';
export const tweetsWereFetched = (events) => ({
  type: FETCH_TWEETS_SUCCESS,
  events,
});

export const FETCH_TWEETS_FAILURE = 'app/Landing/FETCH_TWEETS_FAILURE';
export const tweetsWereNotFetched = (error) => ({
  type: FETCH_TWEETS_FAILURE,
  error,
});

const initialState = new Record({
  loadingTweets: false,
  loadingEvents: false,
  events: [],
  tweets: [],
})();

const HANDLERS = {
  [FETCH_EVENTS]: (state) => state
    .set('loadingEvents', true),
  [FETCH_EVENTS_FAILURE]: (state) => state
    .set('loadingEvents', false),
  [FETCH_EVENTS_SUCCESS]: (state, { events }) => state
    .set('loadingEvents', false)
    .set('events', events),
  [FETCH_TWEETS]: (state) => state
    .set('loadingTweets', true),
  [FETCH_TWEETS_FAILURE]: (state) => state
    .set('loadingTweets', false),
  [FETCH_TWEETS_SUCCESS]: (state, { events }) => state
    .set('loadingTweets', false)
    .set('tweets', events),
};

export default (state = initialState, action) =>
  (HANDLERS[action.type] ? HANDLERS[action.type](state, action) : state);
