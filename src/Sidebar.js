import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Create from "@material-ui/icons/Create";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import SidebarOption from "./SidebarOption.js";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
function Sidebar() {
  const [comments, setComments] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setComments(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      );
    });
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__info">
          <h2> {user.displayName}</h2>
          <h3>
            <FiberManualRecordIcon className="sidebar__fiber" />
            {user.email}
          </h3>
        </div>
        <Create className="sidebar__create" />
      </div>

      <div className="sidebar__body">
        <SidebarOption Icon={InsertCommentIcon} title="Threads" />
        <hr />

        <SidebarOption title="Add Channels" addChannelOption />

        {/* {console.log(comments.name)} */}
        {comments.map((comment) => (
          <SidebarOption title={comment.name} id={comment.id} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
