import React from 'react';
import './RecordCard.css';


function RecordCard({ id }) {
  return (
      <button className='score-card' data-cy='score-card'>
        <p>{`Round: ${id}`}</p>
        <p className='click-to-view' data-cy='click-to-view'>Click to view round</p>
      </button>
  )

}

export default RecordCard;
