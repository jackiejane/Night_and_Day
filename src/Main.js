import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
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
      <main>
        <div className='mainSubmit'>
          <h1 className='title'>Night / Day</h1>
          <input type='text' placeholder='email'></input>
          <Link to='/day' ><button>Submit</button></Link>
        </div>
        <div className='imgCont'>
          <img src='https://i.imgur.com/owonS9z.jpg' className='backImg' />
        </div>
        <div className='imgCont'>
          <img src={this.state.spaceImg} className='backImg' />
        </div>
        <div className='pinkTriangle'></div>
        <div className='triangle'></div>
      </main>
    );
  }
}

export default Main;
