import React from 'react';
import VideoListItem from './video_list_item.jsx';

const VideoList = (props) => {
  let videos = props.videos.map((video, index) => {
    return (
      <VideoListItem key={video.etag}
                     video={video}
                     onVideoSelect={props.onVideoSelect}/>
    );
  });
  return (
    <ul className="col-md-4 list-group">
      {videos}
    </ul>
  );
};

export default VideoList;