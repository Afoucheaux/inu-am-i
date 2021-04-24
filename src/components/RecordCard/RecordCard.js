import React from 'react';
import './RecordCard.css';

function RecordCard({ id, handleRound }) {
  return (
    <button onClick={event => handleRound(id)} className='score-card' data-cy='score-card'>
      <p>{`Round: ${id + 1}`}</p>
      <p className='click-to-view' data-cy='click-to-view'>Click to view round</p>
    </button>
  )
}

export default RecordCard;
