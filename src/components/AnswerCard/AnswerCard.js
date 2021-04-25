import React from 'react';
import './AnswerCard.css';
import PropTypes from 'prop-types';

function AnswerCard( { image, id } ) {
  return (
    <article className='card' data-cy='answer-card'>
      <img src={`${image}`} alt={`answer card ${id}`} className='answer-image' data-cy='answer-image'/>
    </article>
  )
}

export default AnswerCard

AnswerCard.propTypes = {
  image: PropTypes.string,
  id: PropTypes.number
}
