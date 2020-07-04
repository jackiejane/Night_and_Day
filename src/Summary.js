import React, { Component } from 'react';
import Time from './Components/Summary/Time'
import Weather from './Components/Summary/Weather'
import Quote from './Components/Summary/Quote';
import Todo from './Components/Summary/Todo'
import Profile from './Components/Summary/Profile'
import NTime from './Components/Summary/NTime'
import NWeather from './Components/Summary/NWeather'
import NQuote from './Components/Summary/NQuote';
import NTodo from './Components/Summary/NTodo'
import NProfile from './Components/Summary/NProfile'
import './App.css'

export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      time: ''
    }
  }
  componentWillMount() {
    let today = new Date()
    let time1 = today.getHours()
    if (time1 > 18) {
      this.setState({
        time: false
      })
    } else {
      this.setState({
        time: true
      })
    }
  }
  render() {
    return (
      <>
        {this.state.time ?
          <main className='day'>
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
          :
          <main className='night' style={{
            background: `url('https://i.imgur.com/19vXbsV.jpg')`,
            backgroundSize: 'cover',

          }}>
            <div className='otherContainer'>
              <NTime />
              <NWeather />
              <NQuote />
            </div>
            <div className='otherContainer'>
              <NProfile />
              <NTodo />
            </div>
          </main>}
      </>
    )
  }
}