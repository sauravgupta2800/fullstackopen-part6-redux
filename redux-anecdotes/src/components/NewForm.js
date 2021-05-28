import React from "react";
import { useDispatch } from "react-redux";
import { createNewEntry } from "../reducers/anecdoteReducer";
const NewForm = () => {
  const dispatch = useDispatch();

  const createEntry = (event) => {
    console.log(event);
    event.preventDefault();
    const content = event.target.content.value;
    event.target.content.value = "";
    // console.log("content: ", content);
    dispatch(createNewEntry(content));
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
