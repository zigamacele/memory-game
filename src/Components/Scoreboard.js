import React from 'react';

export default function Scoreboard({ currentScore, highScore }) {
  return (
    <div className="scoreboard">
      <p className="scoreboard-high">High Score: {highScore}</p>
      <p className="scoreboard-current">Current Score: {currentScore}</p>
    </div>
  );
}
