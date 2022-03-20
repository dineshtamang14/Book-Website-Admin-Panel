import React from "react";
import "./topbar.css";
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import LogoutIcon from '@mui/icons-material/Logout'

export default function Topbar() {
  const logout = () => {
    toast("Logout successfull", { type: "success" });
    localStorage.removeItem("persist:root");
    window.location.href = '/';
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <Link to="/" style={{textDecoration: "none", color: "black"}}>
          <span className="logo">Book Website Admin</span>
          </Link>
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
            <button style={{border: "none", outline: "none", background: "none", cursor: "pointer"}} onClick={logout}><LogoutIcon /></button>
          </div>
        </div>
      </div>
    </div>
  );
}