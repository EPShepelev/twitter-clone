import React from "react";
import "./sidebarOption.css";

function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
