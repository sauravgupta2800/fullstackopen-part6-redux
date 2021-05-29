import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doVote } from "../reducers/anecdoteReducer";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes }) =>
    anecdotes.sort((firstEl, secondEl) => {
      if (firstEl.votes > secondEl.votes) return -1;
      if (firstEl.votes < secondEl.votes) return 1;
      return 0;
    })
  );

  const vote = (id) => {
    dispatch(doVote(id));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
