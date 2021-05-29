import React from "react";
import { useDispatch } from "react-redux";
import { createNewAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "./../reducers/notificationReducer";

const NewForm = () => {
  const dispatch = useDispatch();

  const createEntry = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    dispatch(createNewAnecdote(content));
    dispatch(setNotification(`You created: ${content}`, 4));
  };

  return (
    <form onSubmit={createEntry}>
      <h2>create new</h2>
      <div>
        <input name="content" />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default NewForm;
