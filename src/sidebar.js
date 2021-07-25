import React from 'react';
import './sidebar.css';
import SidebarRow from './sidebarRow';
import ImojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import Storefront from '@material-ui/icons/Storefront';
import { VideoLibrary } from '@material-ui/icons';
import { ExpandMoreOutlined } from '@material-ui/icons';
function sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Mustafa Kamel" src="" />
      <SidebarRow title="COVID-19 Info. Center">
        <LocalHospitalIcon className="icon" />
      </SidebarRow>
      <SidebarRow title="Pages">
        <ImojiFlagsIcon className="icon" />
      </SidebarRow>
      <SidebarRow title="Friends">
        <PeopleIcon className="icon" />
      </SidebarRow>
      <SidebarRow title="Marketplace">
        <Storefront className="icon" />
      </SidebarRow>
      <SidebarRow title="Messenger">
        <ChatIcon className="icon" />
      </SidebarRow>
      <SidebarRow title="Videos">
        <VideoLibrary className="icon" />
      </SidebarRow>
      <SidebarRow>
        <ExpandMoreOutlined className="icon" />
      </SidebarRow>
    </div>
  );
}

export default sidebar;
