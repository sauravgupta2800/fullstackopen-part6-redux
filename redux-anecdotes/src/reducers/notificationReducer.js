const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_NOTIFICATION": {
      return action.notification;
    }
    default:
      return state;
  }
};

export const setNotification = (message, time = 1) => {
  return (dispatch) => {
    dispatch({
      type: "SET_NOTIFICATION",
      notification: message,
    });
    let timeoutId = null;
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      dispatch({
        type: "SET_NOTIFICATION",
        notification: "",
      });
      clearTimeout(timeoutId);
    }, time * 1000);
  };
};

export default reducer;
