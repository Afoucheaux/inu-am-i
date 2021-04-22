import React from 'react';
import QuizBoard from '../QuizBoard/QuizBoard';
import StartScreen from '../StartScreen/StartScreen.js';
import {Route, Switch} from 'react-router-dom';

function App() {

  return (
    <Switch className='app'>
      <Route exact path='/' component={ StartScreen }/>
      <Route exact path='/game/:name/:number' render={({ match }) => <QuizBoard name={match.params.name} number={match.params.number}/>}/>
    </Switch>
  );
}

export default App;
