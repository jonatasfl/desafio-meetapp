export function addMeetupsRequest() {
  return {
    type: 'MEETUPS/ADD_REQUEST',
  };
}

export function addMeetupsSuccess(meetups) {
  return {
    type: 'MEETUPS/ADD_SUCCESS',
    payload: meetups,
  };
}
