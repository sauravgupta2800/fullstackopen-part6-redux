import React from "react";
import { setSearchKey } from "../reducers/filterReducer";
// import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
const Filter = ({ value, setSearchKey }) => {
  //const dispatch = useDispatch();

  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    //dispatch(setSearchKey(event.target.value));
    setSearchKey(event.target.value);
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
const mapStateToProps = (state) => {
  return {
    value: state.searchKey,
  };
};

const mapDispatchToProps = {
  setSearchKey,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
