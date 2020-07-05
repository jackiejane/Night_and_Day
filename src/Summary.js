import React, { Component } from 'react';
import Time from './Components/Summary/Time'
import Weather from './Components/Summary/Weather'
import Quote from './Components/Summary/Quote';
import Todo from './Components/Summary/Todo'
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
    if (time1 > 18 || time1 < 6) {
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
          <section className='daySub'>
            <div className='sum'>
              <Time />
            </div>
            <div className='sum'>
              <Weather />
            </div>
            <div className='sum'>
              <Quote />
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
          </section>
          :
          <section className='daySub' style={{
            backgroundImage: `url('https://i.imgur.com/19vXbsV.jpg')`
          }}>
            <div className='nSum'>
              <Time />
            </div>
            <div className='nSum'>
              <Weather />
            </div>
            <div className='nSum'>
              <Quote />
            </div>
            <div className='nTodo'>
              <div style={{
                textAlign: 'center',
                color: 'white'
              }}>
                <h2>Notes and Reminders</h2>
              </div>
              <div style={{
                height: '85%'
              }}>
                <Todo />
              </div>
            </div>
          </section>}
      </>
    )
  }
}