import React, { useState, useEffect } from 'react';
import './PlayerView.css';
import Header from '../Header/Header.js';
import RecordCard from '../RecordCard/RecordCard.js';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import RecordBox from '../RecordBox/RecordBox.js';

function PlayerView({ name, round }) {

  const [displayRound, setDisplayRound] = useState([]);
  const [allRounds, setAllRounds] = useState([]);
  const [correctCards, setCorrectCards] = useState([]);
  const [incorrectCards, setIncorrectCards] = useState([]);

  useEffect(() => {
    setDisplayRound(round)
    const all = allRounds
    setAllRounds([...all, round])
  }, [])

  useEffect(() => {
    let correct = []
    let incorrect = []
    displayRound.forEach(card => {
      if (card.shiba === card.checked) {
        correct.push(card)
      } else {
        incorrect.push(card)
      }
    })
    setCorrectCards(correct);
    setIncorrectCards(incorrect)
  }, [displayRound])

  const checkedGameCards = (cardPile) => {
    let gameCardsDisplay = cardPile.map(info => {
      return (
        <AnswerCard
        key={info.id}
        image={info.image}
        />
      )
    })
    return gameCardsDisplay
  }

  const correctDisplay = checkedGameCards(correctCards);
  const incorrectDiaplsy = checkedGameCards(incorrectCards);

  return (
    <main>
      <Header />
        <section className='page-layout'>
        <div className='left-styling-box'>
          <article className='correct'>
            <p>Got Right!</p>
            {correctCards && correctDisplay}
          </article>
          <article className='incorrect'>
            <p>Opps!</p>
            {incorrectCards && incorrectDiaplsy}
          </article>
        </div>
        <div className='right-styling-box'>
          {allRounds && <RecordBox rounds={allRounds}/>}
        </div>
        </section>
    </main>
  )
}

export default PlayerView;
