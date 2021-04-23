import React, { useState, useEffect } from 'react';
import './QuizBoard.css';
import Header from '../Header/Header.js';
import { getGameImages } from '../../apiCalls.js';
import QuizCard from '../QuizCard/QuizCard.js';

const QuizBoard = ( {name, number} ) => {

  const [gameInfo, setGameInfo] = useState([]);

  useEffect(() => {
    getGameImages(number)
    .then(data => buildGameState(data))
  }, [])

  const updateCard = (event) => {
    let newGameInfo = gameInfo
    if (gameInfo[event.target.parentElement.id].checked === false) {
      event.target.classList.add('grey-out');
      newGameInfo[event.target.parentElement.id].checked = true
      setGameInfo(newGameInfo)
    } else {
      event.target.classList.remove('grey-out');
      newGameInfo[event.target.parentElement.id].checked = false
      setGameInfo(newGameInfo)
    }
  }

  const gameCardsDisplay = gameInfo.map(info => {
    return (
      <QuizCard
      key={info.id}
      id={info.id}
      image={info.image}
      updateCard={updateCard}
      />
    )
  })

  const buildGameState = (data) => {
    const shibas = gameCardinfo(data[0], true);
    const cats = gameCardinfo(data[1], false);
    const animals = shuffle([...shibas, ...cats]);
    setGameInfo(animals);
  }

  const shuffle = (items) => {
    const sortedItems = items.sort(() => Math.random() - 0.5);
    const idAddedToItems = sortedItems.map((item, i) => {
      item.id = i
      return item
    })
    return idAddedToItems;
  }

  const gameCardinfo = (data, trueFalse) => {
    let fullInfo = data.map(info => {
      return { image: info, shiba: trueFalse, checked: false }
    })
    return fullInfo;
  }

  return (
    <section className='page-styling' data-cy='page-styling'>
      <Header />
      <article className='directions' data-cy='directions'>
        <h2 className='inst' data-cy='inst'>Click On all the images of Shiba's and then submit to see how you did!'</h2>
        <button className='get-results' data-cy='get-results'>submit</button>
      </article>
      <article className='game-board' data-cy='game-board'>
        {gameInfo && gameCardsDisplay}
      </article>
    </section>
  )
}


export default QuizBoard;
