import React, { Component } from 'react';
import axios from 'axios';

class Quote extends Component {
  constructor() {
    super();
    this.state = {
      qod: '',
      author: '',
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
      <div className='sumComp'>
        <h3>A Quote</h3>
        <p><small><em>Words from a machine that might be fictional.</em></small></p>
        <p>{this.state.qod}<br /><small>-{this.state.author}</small></p>
      </div>
    )
  }
}

export default Quote