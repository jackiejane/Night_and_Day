import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Day extends Component {
  constructor() {
    super();
    this.state = {
      min: 5,
      sec: 0,
      timerOn: true
    }
  }
  resetSec = () => {
    if (this.state.min > 0) {
      this.setState({
        min: this.state.min - 1,
        sec: 59
      })
      { this.timeKeeper() }
    }
  }
  subtractSec = () => {
    this.setState({
      sec: this.state.sec - 1
    })
    console.log(this.state.sec)
    { this.timeKeeper() }
  }
  timeKeeper = () => {
    if (this.state.sec > 0) {
      setTimeout(() => { this.subtractSec() }, 1000)
    } else if (this.state.sec === 0) {
      setTimeout(() => { this.resetSec() }, 1000)
    }
  }
  handleTimer = () => {
    if (this.state.timerOn === true) {
      this.setState({
        timerOn: false
      })
      { this.timeKeeper() }
    }
  }
  render() {
    return (
      <main className='day'>
        <div className='dayInput'>
          <div className='textClock'>
            <p className='text'>
              Take five minutes to write down whatever comes to mind.
            </p>
            <button onClick={this.timeKeeper}>start</button>
            <div className='clock'>
              <p>{this.state.min}:{this.state.sec ? this.state.sec : '00'}</p>
            </div>
          </div>
          <textarea type='text' className='writingCenter'
            placeholder='The timer will start once you begin to type.'
            onKeyDown={this.handleTimer}>
          </textarea>
          <Link to='/night'><button>Submit</button></Link>
        </div>
      </main>
    );
  }
}

export default Day;