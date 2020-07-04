import React, { Component } from 'react';
import Time from './Components/Summary/Time'
import Weather from './Components/Summary/Weather'
import Quote from './Components/Summary/Quote';
import Todo from './Components/Summary/Todo'
import Profile from './Components/Summary/Profile'
import './App.css'

export default class Summary extends Component {
  constructor() {
    super();
    this.state = {
      time: true
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
              <div className='sumComp'>
                <Time />
              </div>
              <div className='sumComp'>
                <Weather />
              </div>
              <div className='sumComp'>
                <Quote />
              </div>
            </div>
            <div className='otherContainer'>
              <div className='sumComp'>
                <Profile />
              </div>
              <div className='todo'>
                <div style={{
                  textAlign: 'center'
                }}>
                  <h2>Notes and Reminders</h2>
                </div>
                <div style={{
                  height: '85%'
                }}>
                  <Todo />
                </div>
              </div>
            </div>
          </main>
          :
          <main className='night' style={{
            background: `url('https://i.imgur.com/19vXbsV.jpg')`,
            backgroundSize: 'cover',
          }}>
            <div className='otherContainer'>
              <div className='nSumComp'>
                <Time />
              </div>
              <div className='nSumComp'>
                <Weather />
              </div>
              <div className='nSumComp'>
                <Quote />
              </div>
            </div>
            <div className='otherContainer'>
              <div className='nSumComp'>
                <Profile />
              </div>
              <div className='nTodo'>
                <div className='nSumComp'>
                  <h2>Notes and Reminders</h2>
                </div>
                <div style={{
                  height: '85%'
                }}>
                  <Todo />
                </div>
              </div>
            </div>
          </main>}
      </>
    )
  }
}