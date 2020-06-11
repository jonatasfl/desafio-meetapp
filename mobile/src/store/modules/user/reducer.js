const INITIAL_STATE = {
  token: '',
  userdata: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'USER/LOGIN_SUCCESS':
      return action.payload;
    default:
      return state;
  }
}
