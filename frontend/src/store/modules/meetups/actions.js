export function myMeetupsRequest() {
  return {
    type: 'MEETUPS/MY_REQUEST',
  };
}

export function myMeetupsSuccess(meetups) {
  return {
    type: 'MEETUPS/MY_SUCCESS',
    payload: meetups,
  };
}
