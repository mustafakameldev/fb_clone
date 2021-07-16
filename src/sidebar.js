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
      <SidebarRow title="COVID-19 Info. Center" icon={LocalHospitalIcon} />
      <SidebarRow title="Pages" icon={ImojiFlagsIcon} />
      <SidebarRow title="Friends" icon={PeopleIcon} />
      <SidebarRow title="Marketplace" icon={Storefront} />
      <SidebarRow title="Messenger" icon={ChatIcon} />
      <SidebarRow title="Videos" icon={VideoLibrary} />
      <SidebarRow icon={ExpandMoreOutlined} />
    </div>
  );
}

export default sidebar;
