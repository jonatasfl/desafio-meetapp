import { call, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

import api from '../../../services/api';
import { loginSuccess } from './actions';

import { login } from '../../../services/auth';

function* loginSaga(action) {
  const { email, password } = action.payload;
  // const navigation = useNavigation();

  try {
    const { data } = yield call(api.post, '/session', { email, password });
    yield call(login, data.token, data.user);
    yield put(loginSuccess(data.token, data.user));
    // login(response.data.token, response.data.user);
    // navigation.navigate('Home');
  } catch (e) {
    const { status, data: res } = e.response;
    Alert.alert('Falha ao logar', res.error);
  }
}

export default all([takeLatest('USER/LOGIN_REQUEST', loginSaga)]);
