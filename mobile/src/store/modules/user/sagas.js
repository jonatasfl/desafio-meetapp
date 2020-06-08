import { call, put, all, takeLatest } from 'redux-saga/effects';
// import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';
import { loginSuccess } from './actions';

import { login } from '../../../services/auth';

function* loginSaga(action) {
  const { email, password } = action.payload;
  // const navigation = useNavigation();

  try {
    const response = yield call(api.post, '/session', { email, password });
    yield put(loginSuccess(response.data.user));
    login(response.data.token, response.data.user);
    // navigation.navigate('Home');
  } catch (e) {
    const { status, data: res } = e.response;
    if (status === 401) {
      console.log(res.error);
    } else {
      console.log('Erro ao tentar logar.');
    }
  }
}

export default all([takeLatest('USER/LOGIN_REQUEST', loginSaga)]);
