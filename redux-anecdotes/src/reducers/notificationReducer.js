const reducer = (state = "This is the default notification text", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    default:
      return state;
  }
};

export default reducer;
