import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { db } from "./firebase";
import "./SidebarOption.css";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();

  const selectChannel = () => {
    if (id) {
      console.log(id);
      history.push(`/rooms/${id}`);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Enter Channel NAme");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <div
      className="sidebarOption "
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebar__icon" />}

      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
