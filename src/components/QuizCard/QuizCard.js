import React from 'react';
import './QuizCard.css';
import PropTypes from 'prop-types';

function QuizCard( props ) {
  return (
    <button onClick={event => props.updateCard(event)} className='card' data-cy='card' id={props.id}  >
      <img src={`${props.image}`} alt='game card' className='card-image' data-cy='card-image'/>
    </button>
  )
}

export default QuizCard

QuizCard.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number
}
