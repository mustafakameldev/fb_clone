import React from 'react';
import './Story.css';
import { Avatar } from '@material-ui/core';
import { BorderRightTwoTone } from '@material-ui/icons';
function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar
        src={profileSrc}
        className="story_avatar"
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          borderWidth: 5,
          borderColor: '#cccccc',
        }}
      />
      <h4>{title}</h4>
    </div>
  );
}

export default Story;
