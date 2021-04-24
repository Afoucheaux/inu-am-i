import React, { useState } from 'react';
import {Route, Switch} from 'react-router-dom';
import QuizBoard from '../QuizBoard/QuizBoard';
import StartScreen from '../StartScreen/StartScreen.js';
import PlayerView from '../PlayerView/PlayerView.js';

function App() {

  const [roundInfo, setRoundInfo] = useState([]);

  const  updateRound = (update) => {
    setRoundInfo(update)
  }

  return (
    <Switch className='app'>
      <Route exact path='/' component={ StartScreen }/>
      <Route exact path='/game/:name/:number' render={({ match }) => <QuizBoard name={match.params.name} number={match.params.number} updateRound={updateRound}/>}/>
      <Route exact path='/user/:player' render={({ match}) => <PlayerView name={match.params.player} round={roundInfo}/>}/>
    </Switch>
  );
}

export default App;
