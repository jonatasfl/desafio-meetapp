import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '~/services/api';
import { loginSuccess } from './actions';

import { login } from '~/services/auth';

function* loginSaga(action) {
  const { email, password } = action.payload;
  const response = yield call(api.post, '/session', { email, password });
  yield put(loginSuccess(response.data.user));
  login(response.data.token, response.data.user);
}

export default all([takeLatest('USER/LOGIN_REQUEST', loginSaga)]);
