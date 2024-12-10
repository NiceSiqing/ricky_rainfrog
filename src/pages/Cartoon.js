import React from 'react';
import './Cartoon.css';
import dancing from '../assets/videos/dancing.mp4';
import spill from '../assets/videos/spill_garbage.mp4';
import driving from '../assets/videos/driving.mp4';
import swimming from '../assets/videos/swimming.mp4';
import takeshower from '../assets/videos/take_shower.mp4';

const videos = [
  { src: dancing, title: 'Dancing Fun' },
  { src: driving, title: 'Driving Adventure' },
  { src: spill, title: 'Oops! Spilled' },
  { src: swimming, title: 'Swimming Chill' },
  { src: takeshower, title: 'Shower Time' },
];

function Cartoon() {
  return (
    <div className="cartoon-container">
      <h1>Cartoon Gallery</h1>
      <div className="videos-grid">
        {videos.map((video, index) => (
          <div className="video-card" key={index}>
            <h3>{video.title}</h3>
            <div className="video-wrapper">
              <video controls>
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cartoon;
