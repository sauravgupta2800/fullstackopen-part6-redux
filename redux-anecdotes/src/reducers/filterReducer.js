const reducer = (state = "", action) => {
  switch (action.type) {
    case "SET_SEARCH_KEY": {
      return action.searckKey;
    }
    default:
      return state;
  }
};

export const setSearchKey = (searckKey) => {
  return {
    type: "SET_SEARCH_KEY",
    searckKey,
  };
};

export default reducer;
