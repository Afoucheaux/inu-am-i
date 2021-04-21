import logo from '../../logo.svg';
import './App.css';
import React from 'react';
import StartScreen from '../StartScreen/StartScreen.js'
import {Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Switch className='app'>
      <Route exact path="/" component={ StartScreen }/>
    </Switch>
  );
}

export default App;
