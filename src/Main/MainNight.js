import React, { Component } from 'react';
import axios from 'axios'

class MainNight extends Component {
  constructor() {
    super();
    this.state = {
      spaceImg: '',
    }
  }
  async componentDidMount() {
    try {
      const data = await axios('https://api.nasa.gov/planetary/apod?api_key=dd9lylHuJlgwx0Mevlits2qeta0pbdkRKAyZUL1L')
      this.setState({
        spaceImg: data.data.url
      })
    } catch (err) {
      console.log(`This is your ${err}`)
    }
  }
  render() {
    return (
      <div className='imgCont' style={{
        backgroundImage: `url(${this.state.spaceImg})`
      }}>
      </div>
    );
  }
}

MainNight.propTypes = {

};

export default MainNight;