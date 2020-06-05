import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/history';
import api from '~/services/api';
import { loginSuccess } from './actions';

import { login } from '~/services/auth';

function* loginSaga(action) {
  const { email, password } = action.payload;

  try {
    const response = yield call(api.post, '/session', { email, password });
    yield put(loginSuccess(response.data.user));
    login(response.data.token, response.data.user);
    history.replace('/');
  } catch (e) {
    const { status, data: res } = e.response;
    if (status === 401) {
      toast.error(res.error);
    } else {
      toast.error('Erro ao tentar logar.');
    }
  }
}

export default all([takeLatest('USER/LOGIN_REQUEST', loginSaga)]);
