import anecdoteService from "../services/anecdote";

const reducer = (state = [], action) => {
  switch (action.type) {
    case "DO_VOTE": {
      const { id } = action.data;
      return state.map((item) => {
        if (item.id === id) {
          return {
            ...action.data,
          };
        }
        return item;
      });
    }
    case "NEW_ENTRY": {
      return state.concat(action.data);
    }
    case "INIT_ANECDOTES": {
      return action.data;
    }
    default:
      return state;
  }
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anevdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anevdotes,
    });
  };
};

export const createNewAnecdote = (content) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.create(content);
    dispatch({
      type: "NEW_ENTRY",
      data: anecdote,
    });
  };
};

export const doVote = (id, objectData) => {
  return async (dispatch) => {
    const anecdote = await anecdoteService.update(id, objectData);
    dispatch({
      type: "DO_VOTE",
      data: anecdote,
    });
  };
};
export default reducer;
