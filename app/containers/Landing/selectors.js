import { createSelector } from 'reselect';

const selectLandingState = () => state => state.get('landing').toJS();
const selectEvents = () => state => state.getIn(['landing', 'events']);
const selectTweets = () => state => state.getIn(['landing', 'tweets']);
const selectLoadingEvents = () => state => state.getIn(['landing', 'loadingEvents']);
const selectLoadingTweets = () => state => state.getIn(['landing', 'loadingTweets']);

const selectLanding = () => createSelector(
  selectEvents(),
  selectTweets(),
  selectLoadingTweets(),
  selectLoadingEvents(),
  (events, tweets, loadingTweets, loadingEvents) => ({
    events, tweets, loadingTweets, loadingEvents,
  })
);

export default selectLanding;
export {
  selectEvents,
  selectLoadingEvents,
  selectTweets,
  selectLoadingTweets,
};
