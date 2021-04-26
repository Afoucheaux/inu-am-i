import React from 'react';
import {Route, Switch} from 'react-router-dom';
import QuizBoard from '../QuizBoard/QuizBoard';
import StartScreen from '../StartScreen/StartScreen.js';
import PlayerView from '../PlayerView/PlayerView.js';
import PathError from '../PathError/PathError.js';

function App() {

  return (
    <Switch className='app'>
      <Route exact path='/' component={ StartScreen }/>
      <Route exact path='/game/:name/:number' render={({ match }) => <QuizBoard name={match.params.name} number={match.params.number}/>}/>
      <Route exact path='/user/:player' render={({ match }) => <PlayerView name={match.params.player}/>}/>
      <Route path='*' component={ PathError }/>
    </Switch>
  );
}

export default App;
