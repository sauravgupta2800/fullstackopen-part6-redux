import React from "react";
import { useDispatch } from "react-redux";
import { createNewEntry } from "../reducers/anecdoteReducer";
import {
  showNotification,
  hideNotification,
} from "./../reducers/notificationReducer";
const NewForm = () => {
  const dispatch = useDispatch();

  const createEntry = (event) => {
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    dispatch(createNewEntry(content));
    dispatch(showNotification(`You created: ${content}`));
    setTimeout(() => dispatch(hideNotification()), 5000);
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
