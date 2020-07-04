import React from 'react';
import Main from './Main'
import { Route } from 'react-router-dom'
import Dayz from './dayz'
import Summary from './Summary'
import './App.css'

function App() {
  return (
    <>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/day'>
        <Dayz />
      </Route>
      <Route path='/summary'>
        <Summary />
      </Route>
    </>
  );
}
export default App;
