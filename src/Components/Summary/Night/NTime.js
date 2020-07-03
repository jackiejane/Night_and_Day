import React, { Component } from 'react';

class Time extends Component {
  constructor() {
    super();
    this.setState({
      date: '',
      month: '',
      year: '',
      day: '',
      hour: '',
      minute: '',
    })
  }
  tick() {
    const today = new Date()
    let hour1 = today.getHours()
    let minutes1 = today.getMinutes()
    let date1 = (today.getDay()) - 2
    this.setState({
      date: date1,
      hour: hour1,
      minute: minutes1,
    })
  }

  componentWillMount() {
    const today = new Date()
    let date1 = (today.getDay()) - 2
    let month1 = today.getMonth()
    let year1 = today.getUTCFullYear()
    let day1 = today.getDay()
    let hour1 = today.getHours()
    let minutes1 = today.getMinutes()
    let day2 = ''
    if (day1 === 0) {
      day2 = 'Sunday'
    } else if (day1 === 1) {
      day2 = 'Monday'
    } else if (day1 === 2) {
      day2 = 'Tuesday'
    } else if (day1 === 3) {
      day2 = 'Wednesday'
    } else if (day1 === 4) {
      day2 = 'Thursday'
    } else if (day1 === 5) {
      day2 = 'Friday'
    } else if (day1 === 6) {
      day2 = 'Saturday'
    }
    let month2 = ''
    if (month1 === 0) {
      month2 = 'January'
    } else if (month1 === 1) {
      month2 = 'February'
    } else if (month1 === 2) {
      month2 = 'March'
    } else if (month1 === 3) {
      month2 = 'April'
    } else if (month1 === 4) {
      month2 = 'May'
    } else if (month1 === 5) {
      month2 = 'June'
    } else if (month1 === 6) {
      month2 = 'July'
    } else if (month1 === 7) {
      month2 = 'August'
    } else if (month1 === 8) {
      month2 = 'September'
    } else if (month1 === 9) {
      month2 = 'October'
    } else if (month1 === 10) {
      month2 = 'November'
    } else if (month1 === 11) {
      month2 = 'December'
    }
    this.setState({
      date: date1,
      month: month2,
      year: year1,
      day: day2,
      hour: hour1,
      minute: minutes1,
    })
  }

  componentDidMount() {
    try {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    } catch (err) {
      console.log(`This is your error ${err}`)
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (
      <div className='nSumComp'>
        <h1>{this.state.hour <= 9 ? `0${this.state.hour}` : `${this.state.hour}`}:{this.state.minute <= 9 ? `0${this.state.minute}` : `${this.state.minute}`}</h1>
        <h3>{this.state.day}, {this.state.month} {this.state.date}, {this.state.year}</h3>
      </div>
    );
  }
}

export default Time;