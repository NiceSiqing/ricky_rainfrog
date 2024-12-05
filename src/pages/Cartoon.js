import React from 'react';
import './Cartoon.css';

const videos = [
  { src: '/assets/videos/dancing.mp4' },
  { src: '/assets/videos/driving.mp4' },
  { src: '/assets/videos/spill_garbage.mp4' },
  { src: '/assets/videos/swimming.mp4' },
  { src: '/assets/videos/take_shower.mp4' },
];

function Cartoon() {
  return (
    <div className="cartoon-container">
      <h1>Cartoon</h1>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div className="video-wrapper" key={index}>
            <video controls>
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartoon;

