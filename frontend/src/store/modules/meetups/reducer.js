export default function meetups(state = [], action) {
  switch (action.type) {
    case 'MEETUPS/ADD':
      return [...state, ...action.payload];
    default:
      return state;
  }
}
