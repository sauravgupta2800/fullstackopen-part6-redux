import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doVote, setInit } from "../reducers/anecdoteReducer";
import {
  showNotification,
  hideNotification,
} from "./../reducers/notificationReducer";
import anecdoteServices from "../services/anecdote";
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
    anecdoteServices.getAll().then((anecdotes) => {
      dispatch(setInit(anecdotes));
    });
  }, []);

  const vote = (id, content) => {
    dispatch(doVote(id));
    dispatch(showNotification(`You have voted for: ${content}`));
    setTimeout(() => dispatch(hideNotification()), 5000);
  };

  return (
    <div>
      {anecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>
              vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
