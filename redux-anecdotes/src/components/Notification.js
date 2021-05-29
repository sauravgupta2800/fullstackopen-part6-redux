import { useSelector } from "react-redux";
import React from "react";

const Notification = () => {
  const notificationText = useSelector((state) => state.notificationText);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return <div style={style}>{notificationText}</div>;
};

export default Notification;
