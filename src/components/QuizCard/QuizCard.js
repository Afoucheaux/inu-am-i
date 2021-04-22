import React from 'react';
import './QuizCard.css';

function QuizCard( props ) {
  return (
    <button onClick={event => props.handleFunc(event)} className='card' data-cy='card'>
      <img src={`${props.image}`} alt='game card' />
    </button>
  )
}

export default QuizCard
