const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    default:
      return state;
  }
};

export const showNotification = (message) => {
  return {
    type: "SET_NOTIFICATION",
    notification: message,
  };
};

export const hideNotification = () => {
  return {
    type: "SET_NOTIFICATION",
    notification: "",
  };
};

export default reducer;
