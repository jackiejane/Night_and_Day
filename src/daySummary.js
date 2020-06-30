import React, { Component } from 'react';
import axios from 'axios';

class Summary extends Component {
  constructor() {
    super();
    this.state= {
      qod: '',
      author: ''
    }
  }
  async componentDidMount() {
    try {
      let data = await axios('https://favqs.com/api/qotd')
      console.log(data.data.quote)
      this.setState({
        qod: data.data.quote.body,
        author: data.data.quote.author
      })
    } catch (error) {
      console.log(error)
    }
  }
  render() {
    return (
      <main className='day'>
        <div className='dayInput'>
          <h1>QOD</h1>
          <p>{this.state.qod}<br /><br />-{this.state.author}</p>
        </div>
      </main>
    );
  }
}

export default Summary;