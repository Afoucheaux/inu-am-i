import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import './StartScreen.css'


function StartScreen () {
  const [userName, setUserName] = useState('Name');
  const [numberOfShiba, setNumberOfShiba] = useState(5);

  const handleNameChange = (event) => {
    setUserName(event.target.value);
  }

  const handleNumChange = (event) => {
    setNumberOfShiba(event.target.value);
  }

  const clearInputs = () => {
    setUserName('User');
    setNumberOfShiba(5);
  }

  return (
    <section className='form-page' data-cy='form-page'>
      <Header />
      <article className='styling-box'>
        <form className='start-info'>
         <input
            className='set-name'
            data-cy='set-name'
            type='text'
            placeholder='user name'
            name='userName'
            value={userName}
            onChange={event => handleNameChange(event)}
         />
         <input
           className='set-num'
            data-cy='set-num'
            type='number'
            min='1'
            max='15'
            placeholder="Number of Shiba's"
            name='numberOfShiba'
            value={numberOfShiba}
            onChange={event => handleNumChange(event)}
         />
         <Link onClick={() => clearInputs()} className="start-button" data-cy="start-button" to={`/game/${userName}/${numberOfShiba}`}>Start Matching</Link>
        </form>
      </article>
    </section>
  )
}


export default StartScreen
