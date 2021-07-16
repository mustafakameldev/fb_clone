import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './sidebarRow.css';
function SidebarRow({ src, title, icon }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {icon && <Icon src={icon} />}
      <h4>{title}</h4>
    </div>
  );
}
export default SidebarRow;
