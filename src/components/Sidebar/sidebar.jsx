import React, { useState } from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar">
        <h3>Home</h3>
        <h3>About</h3>
      </div>
    </div>
  );
};

export default Sidebar;