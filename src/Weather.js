import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

class Weather extends Component {
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
        <h3>Weather for: {this.state.location}</h3>
        <img src={this.state.icon}></img><br />
        <table>
          <tbody>
            <tr>
              <td>
                <p>Temperature: {this.state.farenheit}°F</p>
              </td>
              <td>
                <p></p>
              </td>
              <td>
                <p>Humidity: {this.state.humidity}%</p>
              </td>
              <td>
                <p></p>
              </td>
              <td>
                <p>Cloud Cover: {this.state.cloud}%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }
}

export default Weather;
