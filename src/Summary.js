import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Time from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Day/Profile.js'
import Weather from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Day/Weather.js'
import Quote from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Day/Quote.js';
import Todo from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Day/Todo.js'
import Profile from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Day/Profile.js'
import NTime from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Night/NTime.js'
import NWeather from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Night/NWeather.js'
import NQuote from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Night/NQuote.js';
import NTodo from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Night/NTodo.js'
import NProfile from '/Users/jacqueline-janedenney/General_Assembly/sei/constellations/Unit_2/project2/night_and_day/src/Components/Summary/Night/NProfile.js'
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
    console.log(time1)
    if (time1 > 18 && time1 < 6) {
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