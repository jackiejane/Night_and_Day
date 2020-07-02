import React, { Component } from 'react';
import axios from 'axios';
import Weather from './Weather'
import Time from './Time'
import Todo from './todo'
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
      <main className='SummaryMain'>
        <div className='otherContainer'>
          <div className='sumComp'>
            <Time />
          </div>
          <div className='sumComp'>
            <Weather />
          </div>
          <div className='sumComp'>
            <h3>A Quote</h3>
            <p><small><em>Words from a machine that might be fictional.</em></small></p>
            <p>{this.state.qod}<br /><small>-{this.state.author}</small></p>
          </div>
        </div>
        <div className='otherContainer'>
          <div className='profile'>Profile</div>
          <div className='todo'>
          </div>
        </div>
      </main>
    );
  }
}

export default Summary;