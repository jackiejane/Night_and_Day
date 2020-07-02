import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather'
import './App.css'

class Summary extends Component {
  constructor() {
    super();
    this.state = {
      qod: '',
      author: '',
      lat: '',
      long: '',
    }
  }
  async componentDidMount() {
    try {
      let data = await axios('https://favqs.com/api/qotd')
      this.setState({
        qod: data.data.quote.body,
        author: data.data.quote.author
      })
    } catch (error) {
      console.log(`this is your ${error}`)
    }
  }
  render() {
    return (
      <main className='day' onLoad={this.getLocation}>
        <div className='summaryInput'>
          <h3>A Quote</h3>
          <p><small><em>Words from a machine that may or may not be true and accurate.</em></small></p>
          <p>{this.state.qod}<br /><small>-{this.state.author}</small></p>
          <Weather />
        </div>
        <div className='otherContainer'>
          <div className='profile'>Profile</div>
          <div className='todo'></div>
        </div>
      </main>
    );
  }
}

export default Summary;