import React from 'react';
import './RecordBox.css';
import RecordCard from '../RecordCard/RecordCard.js';

function RecordBox({ rounds, handleRound }) {

  const records = rounds.map((info, i) => {
    return (
      <RecordCard
        key={i}
        id={i}
        handleRound={handleRound}
       />
    )
  })

  return (
    <article className='record-box'>
      {records}
    </article>
  )

}

export default RecordBox;
