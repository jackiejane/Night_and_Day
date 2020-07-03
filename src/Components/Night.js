import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Night extends Component {
  constructor() {
    super();

    this.state = {
      spaceImg: '',
      min: 10,
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
  async componentDidMount() {
    try {
      const data = await axios('https://api.nasa.gov/planetary/apod?api_key=dd9lylHuJlgwx0Mevlits2qeta0pbdkRKAyZUL1L')
      console.log(data.data.url)
      this.setState({
        spaceImg: data.data.url
      })
    } catch (err) {
      console.log(`This is your ${err}`)
    }
  }
  render() {
    return (
      <main className='night' style={{
        backgroundImage: `url(${this.state.spaceImg})`
      }}>
        <div className='nightInput'>
          <div className='textClock'>
            <p className='text'>
              Take 10 minutes to reflect on your day. What did you accomplish? What did you struggle with? jot down any thoughts you have as well as ideas for tomorrow.
            </p>
            <div className='clock'>
              <p>{this.state.min}:
              {this.state.sec > 9 ? this.state.sec : '0' + this.state.sec}</p>
            </div>
          </div>
          <textarea type='text' className='writingCenter'
            placeholder='The timer will start once you begin to type.'
            onKeyDown={this.handleTimer}>
          </textarea>
          <Link to='/summary'><button className='subButton'>Submit</button></Link>
        </div>
      </main>
    );
  }
}

export default Night;