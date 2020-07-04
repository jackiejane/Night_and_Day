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
      this.timeKeeper()
    }
  }
  subtractSec = () => {
    this.setState({
      sec: this.state.sec - 1
    })
    this.timeKeeper()
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
      this.timeKeeper()
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
        backgroundImage: `url(${this.state.spaceImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}>
        <div className='nSumComp' style={{
          backgroundColor: 'rgba(58, 46, 46, 0.8)'
        }}>
          <div className='textClock'>
            <div style={{
              margin: '15px'
            }}>
              <p>
                Take 10 minutes to reflect on your day. What did you accomplish? What did you struggle with? jot down any thoughts you have as well as ideas for tomorrow.
              </p>
            </div>
            <div className='clock'>
              <p>{this.state.min}:
              {this.state.sec > 9 ? this.state.sec : '0' + this.state.sec}</p>
            </div>
          </div>
          <div>
            <label for="mood">Rate your current mood.</label>
            <input type="range" id="mood" name="mood" min="0" max="10"></input>
            <br />
            <br />
          </div>
          <textarea type='text' className='writingCenter'
            placeholder='The timer will start once you begin to type.'
            onKeyDown={this.handleTimer}>
          </textarea>
          <div>
            <Link to='/summary'><button className='subButton'>Submit</button></Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Night;