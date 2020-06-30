import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'

class Night extends Component{
  constructor() {
    super();

    this.state = {
      spaceImg: ''
    }
  }
  async componentDidMount() {
    try {
      const data = await axios('https://api.nasa.gov/planetary/apod?api_key=dd9lylHuJlgwx0Mevlits2qeta0pbdkRKAyZUL1L')
      this.setState({
        spaceImg: data.data.hdurl
      })
    } catch (err) {
      console.log(`This is your ${ err }`)
    }
  }
  render() {
    return (
      <main className='night'>
        <img src={this.state.spaceImg}></img>
        <div className='nightInput'>
          <div className='textClock'>
            <p className='text'>
              Take five minutes to write down whatever comes to mind.
              The timer will let you know when time is up.
            </p>
            <div className='clock'>
            <p>CLOCK</p>
            </div>
          </div>
          <input type='text' className='writingCenter'></input>
          <Link to='/night'><button>Submit</button></Link>
        </div>
      </main>
    );
  }
}

export default Night;