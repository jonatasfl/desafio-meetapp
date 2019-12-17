import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { myMeetupsSuccess } from './actions';

function* myMeetups() {
  const response = yield call(api.get, '/meetups/my');
  yield put(myMeetupsSuccess(response.data));
}

export default all([takeLatest('MEETUPS/MY_REQUEST', myMeetups)]);
