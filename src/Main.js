import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css'
import axios from 'axios'

class Main extends Component {
  constructor() {
    super();
    this.state = {
      spaceImg: '',
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
        {this.state.time ?
          <Link to='/day' className='mainSubmit'>
            <div>
              <h1 className='title'>/ Night /</h1>
              <p>An app for self-reflection. <br /> For optimal experience, <br /> please allow the site access to your location. </p>
              <h1 className='title'>\ Day \</h1>
            </div>
          </Link>
          :
          <Link to='/night' className='mainSubmit'>
            <div>
              <h1 className='title'>/ Night /</h1>
              <p>An app for self-reflection. <br /> For optimal experience, <br /> please allow the site access to your location. </p>
              <h1 className='title'>\ Day \</h1>
            </div>
          </Link>}
        <div className='imgCont' style={{
          backgroundImage: `url(${this.state.spaceImg})`
        }}>
        </div>
        <div className='imgCont' style={{
          backgroundImage: `url(https://i.imgur.com/owonS9z.jpg)`
        }}>
        </div>
        <div className='pinkTriangle'></div>
        <div className='triangle'></div>
      </main>
    );
  }
}

export default Main;
