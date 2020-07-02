import React from 'react';
import Main from './Main'
import { Route } from 'react-router-dom'
import Day from './Day'
import Night from './Night'
import Summary from './Summary'
import './App.css'
function App() {
  console.log(`${process.env.API_KEY}`)
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
