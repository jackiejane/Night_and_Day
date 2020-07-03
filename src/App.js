import React from 'react';
import Main from './Main'
import { Route } from 'react-router-dom'
import Day from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Day.js'
import Night from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Night.js'
import Summary from './Summary'
import './App.css'

function App() {
  return (
    <>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/day'>
        <Day />
      </Route>
      <Route path='/night'>
        <Night />
      </Route>
      <Route path='/summary'>
        <Summary />
      </Route>
    </>
  );
}
export default App;
