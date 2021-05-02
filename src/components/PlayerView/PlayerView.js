import React, { useState, useEffect } from 'react';
import './PlayerView.css';
import Header from '../Header/Header.js';
import RecordCard from '../RecordCard/RecordCard.js';
import AnswerCard from '../AnswerCard/AnswerCard.js';
import { useLocation, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function PlayerView({ name }) {
  const location = useLocation();
  const [displayRound, setDisplayRound] = useState([]);
  const [allRounds, setAllRounds] = useState([]);
  const [correctCards, setCorrectCards] = useState([]);
  const [incorrectCards, setIncorrectCards] = useState([]);

  useEffect(() => {
    const round = location.state.gameInfo;
    setDisplayRound(round);
  }, [location.state.gameInfo]);

  useEffect(() => {
    const round = location.state.gameInfo;
    if(location.state.allRounds === undefined) {
      setAllRounds([round]);
    } else {
      const previousRounds = location.state.allRounds;
      setAllRounds([...previousRounds, round]);
    }
  }, [location.state.allRounds, location.state.gameInfo]);

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
      <article className='button-box' data-cy='button-box'>
        <Link className='quick' data-cy='quick' to={{pathname:`/game/${name}/5`, state:{allRounds}}}>Quick Game</Link>
      </article>
      <section className='page-layout'>
        <div className='left-styling-box' data-cy='left'>
          <article className='correct'>
            <div className='title' data-cy='title-correct'>
              <p className='section-header' data-cy='got'>{`Got ${ Math.round((correctCards.length / displayRound.length) * 100)}% Right!`}</p>
            </div>
            {correctCards && correctDisplay}
          </article>
          <article className='incorrect'>
          <div className='title' data-cy='title-incorrect'>
            <p className='section-header' data-cy='opps'>Opps!</p>
          </div>
            {incorrectCards && incorrectDiaplsy}
          </article>
        </div>
        <article className='rounds-box' data-cy='right'>
          <p className='player-rounds' data-cy='player-rounds'>{`${name}'s Page`}</p>
          {allRounds && roundsToDisplay}
        </article>
      </section>
    </main>
  )
}

export default PlayerView;

PlayerView.propTypes = {
  name: PropTypes.string
}
