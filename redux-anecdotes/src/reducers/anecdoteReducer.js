const getId = () => (100000 * Math.random()).toFixed(0);

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "DO_VOTE": {
      const { id } = action.data;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            votes: item.votes + 1,
          };
        }
        return item;
      });
    }
    case "NEW_ENTRY": {
      return state.concat(action.data);
    }
    case "INIT_ACECDOTES": {
      return action.data;
    }
    default:
      return state;
  }
};

export const doVote = (id) => {
  return {
    type: "DO_VOTE",
    data: { id },
  };
};

export const createNewEntry = (content = "") => {
  return {
    type: "NEW_ENTRY",
    data: asObject(content),
  };
};

export const setInit = (data) => {
  return {
    type: "INIT_ACECDOTES",
    data,
  };
};

export default reducer;
