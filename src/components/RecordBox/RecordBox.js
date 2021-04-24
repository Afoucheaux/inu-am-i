import React from 'react';
import './RecordBox.css';
import RecordCard from '../RecordCard/RecordCard.js';

function RecordBox({ rounds }) {
  const records = rounds.map((info, i) => {
      return (
        <RecordCard
          key={i}
          id={i + 1}
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
