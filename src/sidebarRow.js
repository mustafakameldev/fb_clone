import React, { useState, useEffect } from 'react';
import { Avatar, Icon } from '@material-ui/core';
import './sidebarRow.css';
import ChatIcon from '@material-ui/icons/Chat';
import { Children } from 'react';
function SidebarRow({ src, title, icon, children }) {
  return (
    <div className="sidebarRow">
      <div>{children}</div>
      <h4>{title}</h4>
    </div>
  );
}
export default SidebarRow;
