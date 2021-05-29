import React from "react";
import { setSearchKey } from "../reducers/filterReducer";
import { useDispatch, useSelector } from "react-redux";

const Filter = () => {
  const value = useSelector((state) => state.searchKey);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    dispatch(setSearchKey(event.target.value));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Filter;
