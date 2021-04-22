import logo from '../../logo.svg';
import './App.css';
import React, {useState} from 'react';
import QuizBoard from '../QuizBoard/QuizBoard';
import StartScreen from '../StartScreen/StartScreen.js';
import {Route, Switch} from 'react-router-dom';
import {getGameImages} from '../../apiCalls.js';

function App() {
  // const [userName, setUserName] = useState('');
  // const [numberOfShiba, setNumberOfShiba] = useState(0);
  // const [apiTest, setApiTest] = useState([])
  //
  // const addStartingInfo = (newUserName, newNumberOfShiba) => {
  //   console.log(numberOfShiba)
  //   setUserName(newUserName);
  //   setNumberOfShiba(newNumberOfShiba);
  //   getGameImages(numberOfShiba)
  //   .then(data => setApiTest(...data))
  // }

  return (
    <Switch className='app'>
      <Route exact path='/' component={ StartScreen }/>
      <Route exact path='/game/:name/:number' render={({ match }) => <QuizBoard name={match.params.name} number={match.params.number}/>}/>
    </Switch>
  );
}

export default App;
