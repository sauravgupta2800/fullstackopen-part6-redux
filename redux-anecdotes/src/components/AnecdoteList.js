import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doVote, initializeAnecdotes } from "../reducers/anecdoteReducer";
import { setNotification } from "./../reducers/notificationReducer";
const AnecdoteList = () => {
  const dispatch = useDispatch();
  const anecdotes = useSelector(({ anecdotes, searchKey }) =>
    anecdotes
      .sort((firstEl, secondEl) => {
        if (firstEl.votes > secondEl.votes) return -1;
        if (firstEl.votes < secondEl.votes) return 1;
        return 0;
      })
      .filter(({ content }) =>
        content.toLowerCase().includes(searchKey.toLowerCase().trim())
      )
  );

  useEffect(() => {
    dispatch(initializeAnecdotes());
  }, []);

  const vote = (anecdote) => {
    const { id, content, votes } = anecdote;
    dispatch(doVote(id, { ...anecdote, votes: votes + 1 }));
    dispatch(setNotification(`You have voted for: ${content}`, 4));
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
