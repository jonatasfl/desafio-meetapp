import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { addMeetupsSuccess } from './actions';

function* addMeetups() {
  const response = yield call(api.get, '/meetups/my');
  yield put(addMeetupsSuccess(response.data));
}

export default all([takeLatest('MEETUPS/ADD_REQUEST', addMeetups)]);
