import React from 'react';
import './StoryReel.css';
import Story from './Story';
export default function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image={
          'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80'
        }
        profileSrc={
          'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        }
        title={'Here is  mospro'}
      />
      <Story
        profileSrc="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg"
        title="call baby"
      />
      <Story
        profileSrc={
          'https://pagalstatus.com/wp-content/webpc-passthru.php?src=https://pagalstatus.com/wp-content/uploads/2021/03/Sofia-Ansari-HD-Images-And-Photos-1024x1024.jpg&nocache=1'
        }
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lGG100wPjSZqwwiob120fKzMVMeQM56FWg&usqp=CAU'
        }
        title="new car"
      />
      <Story
        profileSrc="https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        image="https://thypix.com/wp-content/uploads/2018/05/Sommerlandschaft-Bilder-1.jpg"
        title="call baby"
      />
      <Story
        profileSrc={
          'https://pagalstatus.com/wp-content/webpc-passthru.php?src=https://pagalstatus.com/wp-content/uploads/2021/03/Sofia-Ansari-HD-Images-And-Photos-1024x1024.jpg&nocache=1'
        }
        image={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-lGG100wPjSZqwwiob120fKzMVMeQM56FWg&usqp=CAU'
        }
        title="new car"
      />
    </div>
  );
}
