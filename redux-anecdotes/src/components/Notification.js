import React from "react";
import { useSelector } from "react-redux";
const Notification = () => {
  const notificationText = useSelector((state) => state.notificationText);

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

export default Notification;
