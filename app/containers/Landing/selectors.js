import { createSelector } from 'reselect';

const selectLandingState = () => state => state.get('landing').toJS();

const selectLanding = () => createSelector(
  selectLandingState(),
  (landing) => ({
    events: landing.events,
    tweets: landing.tweets,
    loadingTweets: landing.loadingTweets,
    loadingEvents: landing.loadingEvents,
  })
);

export default selectLanding;
