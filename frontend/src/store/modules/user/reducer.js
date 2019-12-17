import { getUserData } from '~/services/auth';

const INITIAL_STATE = getUserData() || [];

export default function userdata(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER/LOGIN_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
