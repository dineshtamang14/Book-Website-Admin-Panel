import React from "react";
import "./topbar.css";
import {logout} from "../../redux/userRedux";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Book Website Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/59863035?v=4"
            alt="avatar"
            className="topAvatar"
          />
          <div className="topbarIconContainer" style={{marginLeft: "10px"}}>
            <button onClick={logout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}