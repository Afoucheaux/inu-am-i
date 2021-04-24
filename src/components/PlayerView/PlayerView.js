import React, { useState, useEffect } from 'react';
import './PlayerView.css';
import Header from '../Header/Header.js';
import RecordCard from '../RecordCard/RecordCard.js';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import { useLocation, Link } from 'react-router-dom';

function PlayerView({ name }) {
  const location = useLocation();
  const [displayRound, setDisplayRound] = useState([]);
  const [allRounds, setAllRounds] = useState([]);
  const [correctCards, setCorrectCards] = useState([]);
  const [incorrectCards, setIncorrectCards] = useState([]);

  useEffect(() => {
    const round = location.state.gameInfo;
    setDisplayRound(round)
  }, [])

  useEffect(() => {
    const round = location.state.gameInfo;
    if(location.state.allRounds === undefined) {
      setAllRounds([round])
    } else {
      const previousRounds = location.state.allRounds
      setAllRounds([...previousRounds, round])
    }
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

  const checkedGameCards = cardPile => {
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

  const roundRecords = rounds => {
    let roundsToDisplay = rounds.map((info, i) => {
      return (
        <RecordCard
          key={i}
          id={i}
          handleRound={handleRound}
        />
      )
    })
    return roundsToDisplay
  }

  const handleRound = (id) => {
    const newRoundDisplay = allRounds[id]
    setDisplayRound(newRoundDisplay);
  }

  const correctDisplay = checkedGameCards(correctCards);
  const incorrectDiaplsy = checkedGameCards(incorrectCards);
  const roundsToDisplay = roundRecords(allRounds);

  return (
    <main>
      <Header />
      <article className='button-box'>
        <Link className='start-fresh' data-cy='start-fresh' to={{pathname:`/game/${name}/5`, state:{allRounds}}}>Start Fresh</Link>
      </article>
      <section className='page-layout'>
        <div className='left-styling-box'>
          <article className='correct'>
            <div className='title'>
              <p>Got Right!</p>
            </div>
            {correctCards && correctDisplay}
          </article>
          <article className='incorrect'>
          <div className='title'>
            <p>Opps!</p>
          </div>
            {incorrectCards && incorrectDiaplsy}
          </article>
        </div>
        <article className='rounds-box'>
          {allRounds && roundsToDisplay}
        </article>
      </section>
    </main>
  )
}

export default PlayerView;
