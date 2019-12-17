import { all } from 'redux-saga/effects';

import meetups from './meetups/sagas';
import user from './user/sagas';

export default function* rootSaga() {
  return yield all([meetups, user]);
}
