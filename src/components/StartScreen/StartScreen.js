import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './StartScreen.css'

function StartScreen () {
  const [userName, setUserName] = useState('');
  const [numberOfShiba, setNumberOfShiba] = useState(0);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handleNumChange = (event) => {
    setNumberOfShiba(event.target.value);
  }

  return (
    <section className='form-page' data-cy='form-page'>
      <Header />
      <article className='styling-box'>
        <form className='start-info'>
         <input
            type='text'
            placeholder='user name'
            name='userName'
            value={userName}
            onChange={event => handleNameChange(event)}
         />
         <input
            type='number'
            min='1'
            max='15'
            placeholder="Number of Shiba's"
            name='numberOfShiba'
            value={numberOfShiba}
            onChange={event => handleNumChange(event)}
         />
         <button>Submit</button>
        </form>
      </article>
    </section>
  )

}


export default StartScreen
