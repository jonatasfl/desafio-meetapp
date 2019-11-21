export function addMeetups(meetups) {
  return {
    type: 'MEETUPS/ADD',
    payload: meetups,
  };
}
