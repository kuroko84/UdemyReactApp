import React from "react";
import "./Message.css";

const Message = ({ notification, onClose }) => {
  return (
    <div className="message">
      <div className="notification">{notification}</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Message;
