export default function meetups(state = [], action) {
  switch (action.type) {
    case 'MEETUPS/ADD_SUCCESS':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
