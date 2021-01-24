import React from "react";
import "./Message.css";
import { useStateValue } from "./StateProvider";
function Message({ message, timestamp }) {
  const [{ user }] = useStateValue();
  return (
    <div className="message">
      <img src={user.photoURL} alt={user.displayName} />
      <div className="message__info">
        <h4>
          {user.displayName}
          <span className="message__timestamp">
            {" "}
            {new Date(timestamp?.toDate()).toUTCString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Message;
