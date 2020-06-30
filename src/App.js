import React from 'react';
import Main from './Main'
import { Route } from 'react-router-dom'
import Day from './Day'
import Night from'./Night'
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
    </>
  );
}

export default App;
