export default function meetups(state = [], action) {
  switch (action.type) {
    case 'MEETUPS/MY_SUCCESS':
      return [...action.payload];
    default:
      return state;
  }
}
