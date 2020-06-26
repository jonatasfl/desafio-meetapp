export function loginRequest(email, password) {
  return {
    type: 'USER/LOGIN_REQUEST',
    payload: { email, password },
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
