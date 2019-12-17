import { combineReducers } from 'redux';

import meetups from './meetups/reducer';
import user from './user/reducer';

export default combineReducers({ meetups, user });
