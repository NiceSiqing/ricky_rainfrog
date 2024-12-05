import React, { useState } from 'react';
import './Dialog.css';

// 图片数据，按组分类
const dialogues = {
  bathroom: [
    '/assets/bathroom/bathroom_1.jpg',
    '/assets/bathroom/bathroom_2.jpg',
    '/assets/bathroom/bathroom_3.jpg',
    '/assets/bathroom/bathroom_4.jpg',
    '/assets/bathroom/bathroom_5.jpg',
    '/assets/bathroom/bathroom_6.jpg',
  ],
  expectation_reality: [
    '/assets/expectation_reality/baking.jpg',
    '/assets/expectation_reality/reading.jpg',
    '/assets/expectation_reality/walking.jpg',
  ],
  summer: [
    '/assets/summer/headphones.jpg',
    '/assets/summer/vampire.jpg',
  ],
};

function Dialog() {
  const [currentGroup, setCurrentGroup] = useState('bathroom'); // 当前组
  const [index, setIndex] = useState(0); // 当前组内图片索引

  const currentImages = dialogues[currentGroup]; // 当前组的图片数组

  // 切换到下一张图片
  const nextDialog = () => {
    if (index < currentImages.length - 1) {
      setIndex(index + 1);
    }
  };

  // 切换到上一张图片
  const prevDialog = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  // 切换图片组
  const changeGroup = (group) => {
    setCurrentGroup(group);
    setIndex(0); // 重置索引
  };

  return (
    <div className="dialog-container">
      {/* 图片显示区域 */}
      <img
        src={currentImages[index]}
        alt={`${currentGroup} Dialog ${index + 1}`}
        className="dialog-image"
      />
      <p>
        {currentGroup.toUpperCase()} - {index + 1}/{currentImages.length}
      </p>

      {/* 按钮区域 */}
      <div className="dialog-controls">
        <button onClick={prevDialog} disabled={index === 0}>
          Previous
        </button>
        <button onClick={nextDialog} disabled={index === currentImages.length - 1}>
          Next
        </button>
      </div>

      {/* 图片组切换区域 */}
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
