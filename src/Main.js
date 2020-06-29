import React, { Component } from 'react';
import axios from 'axios'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      spaceImg: ''
    }
  }
  async componentDidMount() {
    try {
      const data = await axios('https://api.nasa.gov/planetary/apod?api_key=6V3lD1ZXhzhly0FfuYlYahguFluFBpM3A3Nahz95')
      this.setState({
        spaceImg: data.data.hdurl
      })
    } catch (err) {
      console.log(`This is your ${ err }`)
    }
  }
    render() {
    return (
      <main>
        <div className='mainSubmit'>
          <h1 className='title'>Night / Day</h1>
          <input type='text' placeholder='email'></input>
          <button>Submit</button>
        </div>
        <div className='imgCont'>
        <img src='https://i.imgur.com/owonS9z.jpg' className='backImg'></img>
        </div>
        <div className='imgCont'>
        <img src={this.state.spaceImg} className='backImg'></img>
        </div>
        <div class='pinkTriangle'></div>
        <div class='triangle'></div>
      </main>
    );
  }
}

export default Main;
