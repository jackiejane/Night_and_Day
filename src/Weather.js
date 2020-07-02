import React, { Component } from 'react';
import { withRouter } from "react-router";
import Summary from './Summary'
import axios from 'axios';
import './App.css'

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      temp: '',
      humidity: '',
      cloud: '',
      description: '',
      icon: '',
      location: '',
      lat: '',
      long: '',
      stopcall: false,
      forecast: []
    }
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      })
    })
  }

  async componentDidUpdate() {
    try {
      if (this.state.stopcall === false) {
        console.log(`Today's date is ${this.state.date}`)
        const api = process.env.REACT_APP_API_KEY_WEATHER
        const url = `https://api.weatherstack.com/forecast?access_key=${api}&query=${this.state.lat},${this.state.long}`
        let res = await axios(url)
        console.log(res.data.forecast)
        this.setState({
          location: res.data.location.name,
          temp: res.data.current.feelslike,
          humidity: res.data.current.humidity,
          cloud: res.data.current.cloudcover,
          description: res.data.weather_descriptions,
          icon: res.data.current.weather_icons,
          stopcall: true,
          forecast: res.data.forecast
        })
      }
    } catch (error) {
      console.log(`this is your ${error}`)
    }
  }
  render() {
    return (
      <div>
        <img src={this.state.icon}></img>
        <h3>Weather for: {this.state.location}</h3>
        <p>Temperature: {this.state.temp}c</p>
        <p>Humidity: {this.state.humidity}</p>
        <p>Cloud Cover: {this.state.cloud}</p>
      </div>
    );
  }
}

export default Weather;
