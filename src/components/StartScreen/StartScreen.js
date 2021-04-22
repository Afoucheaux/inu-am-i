import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './StartScreen.css'


function StartScreen () {
  const [userName, setUserName] = useState('Default User');
  const [numberOfShiba, setNumberOfShiba] = useState(5);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handleNumChange = (event) => {
    setNumberOfShiba(event.target.value);
  }

  const clearInputs = () => {
    setUserName('Default User');
    setNumberOfShiba(5);
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
            required
         />
         <input
            type='number'
            min='1'
            max='15'
            placeholder="Number of Shiba's"
            name='numberOfShiba'
            value={numberOfShiba}
            onChange={event => handleNumChange(event)}
            required
         />
         <Link onClick={() => clearInputs()} className="start-button" data-cy="start-button" to={`/game/${userName}/${numberOfShiba}`}>Start Game</Link>
        </form>
      </article>
    </section>
  )
}


export default StartScreen
