import React, { useState } from 'react';
import './Dialog.css';
import bathroom1 from '../assets/bathroom/bathroom_1.jpg';
import bathroom2 from '../assets/bathroom/bathroom_2.jpg';
import bathroom3 from '../assets/bathroom/bathroom_3.jpg';
import bathroom4 from '../assets/bathroom/bathroom_4.jpg';
import bathroom5 from '../assets/bathroom/bathroom_5.jpg';
import bathroom6 from '../assets/bathroom/bathroom_6.jpg';
import baking from '../assets/expectation_reality/baking.jpg';
import reading from '../assets/expectation_reality/reading.jpg';
import walking from '../assets/expectation_reality/walking.jpg';
import headphones from '../assets/summer/headphones.jpg';
import vampire from '../assets/summer/vampire.jpg';

// Image data categorized by groups
const dialogues = {
  bathroom: [bathroom1, bathroom2, bathroom3, bathroom4, bathroom5, bathroom6],
  expectation_reality: [baking, reading, walking],
  summer: [headphones, vampire],
};

function Dialog() {
  const [currentGroup, setCurrentGroup] = useState('bathroom'); // Current group
  const [index, setIndex] = useState(0); // Current image index within the group

  const currentImages = dialogues[currentGroup]; // Image array for the current group

  // Switch to the next image
  const nextDialog = () => {
    if (index < currentImages.length - 1) {
      setIndex(index + 1);
    }
  };

  // Switch to the previous image
  const prevDialog = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // Change the image group
  const changeGroup = (group) => {
    setCurrentGroup(group);
    setIndex(0); // Reset the index
  };

  return (
    <div className="dialog-container">
      {/* Image display area */}
      <div className="dialog-image-wrapper">
        <img
          src={currentImages[index]}
          alt={`${currentGroup} Dialog ${index + 1}`}
          className="dialog-image"
        />
      </div>
      <p>
        {currentGroup.toUpperCase()} - {index + 1}/{currentImages.length}
      </p>

      {/* Controls for navigation */}
      <div className="dialog-controls">
        <button onClick={prevDialog} disabled={index === 0}>
          Previous
        </button>
        <button onClick={nextDialog} disabled={index === currentImages.length - 1}>
          Next
        </button>
      </div>

      {/* Group selection controls */}
      <div className="dialog-group-controls">
        {Object.keys(dialogues).map((group) => (
          <button
            key={group}
            className={group === currentGroup ? 'active' : ''}
            onClick={() => changeGroup(group)}
          >
            {group.replace('_', ' ')}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Dialog;
