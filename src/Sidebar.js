import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter icon */}
      <TwitterIcon />
      <SidebarOption text="Home" />
      <SidebarOption text="Explore" />
      <SidebarOption text="Notifications" />
      {/* Sidebar options */}
      {/* Button Tweet */}
    </div>
  );
}

export default Sidebar;
