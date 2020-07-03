import React from 'react';
import Time from './Time'
import Weather from './Weather'
import Quote from './Quote';
import Todo from './Todo'
import Profile from './Profile'
import './App.css'

export default function Summary() {
  return (
    <main className='SummaryMain'>
      <div className='otherContainer'>
        <Time />
        <Weather />
        <Quote />
      </div>
      <div className='otherContainer'>
        <Profile />
        <Todo />
      </div>
    </main>
  )
}