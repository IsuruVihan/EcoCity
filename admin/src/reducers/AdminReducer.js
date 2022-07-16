const adminReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGGED_IN':
      return action.payload;
    case 'LOGGED_OUT':
      return action.payload;
    default:
      return state;
  }
}

export default adminReducer;
