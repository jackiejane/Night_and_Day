import React, { Component } from 'react';
import axios from 'axios';

export default class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
      farenheit: '',
      humidity: '',
      cloud: '',
      description: '',
      icon: '',
      location: '',
      lat: '',
      long: '',
      stopcall: false,
      f: true,
      forecast: []
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    })
  }
  handleCalc = () => {
    this.setState({
      f: false,
    })
  }
  handleCalcf = () => {
    this.setState({
      f: true,
    })
  }
  async componentDidUpdate() {
    try {
      if (this.state.stopcall === false) {
        const api = process.env.REACT_APP_API_KEY_WEATHER
        const url = `https://api.weatherstack.com/forecast?access_key=${api}&query=${this.state.lat},${this.state.long}`
        let res = await axios(url)
        console.log(res)
        this.setState({
          location: res.data.location.name,
          temp: res.data.current.feelslike,
          humidity: res.data.current.humidity,
          cloud: res.data.current.cloudcover,
          description: res.data.weather_descriptions,
          icon: res.data.current.weather_icons,
          stopcall: true,
          forecast: res.data.forecast,
          farenheit: (res.data.current.feelslike * 9 / 5) + 32,
        })
      }
    } catch (error) {
      console.log(`this is your ${error}`)
    }
  }
  render() {
    return (
      <>
        <h2>Weather in {this.state.location}</h2>
        <img src={this.state.icon} alt='an icon describing the current weather'></img><br />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly'
        }}>
          <p><strong>Temperature:</strong><br />{this.state.farenheit}°F</p>
          <p><strong>Humidity:</strong><br />{this.state.humidity}%</p>
          <p><strong>Cloud Cover:</strong><br />{this.state.cloud}%</p>
        </div>
      </>
    );
  }
}
