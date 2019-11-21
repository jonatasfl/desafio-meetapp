import { all } from 'redux-saga/effects';

import meetups from './meetups/sagas';

export default function* rootSaga() {
  return yield all([meetups]);
}
