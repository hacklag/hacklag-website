import { call, put, take, fork } from 'redux-saga/effects';
import request from 'utils/request';
import * as actions from 'modules/landing';

export function* handleFetchEvents() {
  while (true) {
    yield take(actions.FETCH_EVENTS);

    try {
      const events = yield call(request, 'events');
      yield put(actions.eventsWereFetched(events));
    } catch (error) {
      yield put(actions.eventsWereNotFetched(error));
    }
  }
}

export function* handleFetchTweets() {
  while (true) {
    yield take(actions.FETCH_TWEETS);

    try {
      const tweets = yield call(request, 'tweets');
      yield put(actions.tweetsWereFetched(tweets));
    } catch (error) {
      yield put(actions.tweetsWereNotFetched(error));
    }
  }
}

export function* landingSaga() {
  yield fork(handleFetchEvents);
  yield fork(handleFetchTweets);
}

// All sagas to be loaded
export default [
  landingSaga,
];
