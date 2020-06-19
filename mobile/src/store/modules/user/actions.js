export function loginRequest(email, password, navigation) {
  return {
    type: 'USER/LOGIN_REQUEST',
    payload: { email, password, navigation },
  };
}

export function loginSuccess(token, userdata) {
  return {
    type: 'USER/LOGIN_SUCCESS',
    payload: {
      token,
      userdata,
    },
  };
}
