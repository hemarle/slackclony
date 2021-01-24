import React from "react";
import "./Header.css";
import { Avatar, Button } from "@material-ui/core";
import AccessTime from "@material-ui/icons/AccessTime";
import Search from "@material-ui/icons/Search";
import HelpOutline from "@material-ui/icons/HelpOutline";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { actionTypes } from "./reducer";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import { useHistory } from "react-router-dom";
function Header() {
  const [{ user }, dispatch] = useStateValue();

  const history = useHistory();
  const logout = () => {
    auth.signOut();
    dispatch({
      type: actionTypes.SET_USER,
      user: null,
    });

    history.push("");
  };
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src={user.photoURL}
          alt={user.displayName}
        />
        <AccessTime className="header__time" />
      </div>

      <div className="header__search">
        <Search />
        <input type="search" placeholder="Search for a channel" />
      </div>

      <div className="header__right">
        <MeetingRoomIcon onClick={logout} className="header__help" />
      </div>
    </div>
  );
}

export default Header;
