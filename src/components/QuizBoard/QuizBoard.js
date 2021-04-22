import React, { useState, useEffect } from 'react';
import './QuizBoard.css';
import Header from '../Header/Header.js';
import { getGameImages } from '../../apiCalls.js'

const QuizBoard = ( {name, number} ) => {

  const [gameInfo, setGameInfo] = useState([]);

  useEffect(() => {
      getGameImages(number)
      .then(data => buildGameState(data))
  }, [])

  const buildGameState = (data) => {
    const shibas = gameCardinfo(data[0], true);
    const cats = gameCardinfo(data[1], false);
    const animals = shuffle([...shibas, ...cats]);
    setGameInfo(animals)
  }

  const shuffle = (items) => {
    console.log(items)
    const sortedItems = items.sort(() => Math.random() - 0.5);
    const idAddedToItems = sortedItems.map((item, i) => {
      item.id = i
      return item
    })
    console.log(idAddedToItems)
    return idAddedToItems;
  }

  const gameCardinfo = (data, trueFalse) => {
    let fullInfo = data.map(info => {
      return { image: info, shiba: trueFalse, checked: false }
    })
    return fullInfo;
  }

  return (
    <>
      <Header />
    </>
  )
}


export default QuizBoard;
