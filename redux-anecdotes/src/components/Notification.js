import React from "react";
import { connect } from "react-redux";
const Notification = ({ notificationText }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return (
    <div>
      {notificationText ? <div style={style}>{notificationText}</div> : ""}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { notificationText: state.notificationText };
};

export default connect(mapStateToProps)(Notification);
