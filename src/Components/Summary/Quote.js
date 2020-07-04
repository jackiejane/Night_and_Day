import React, { Component } from 'react';
import axios from 'axios';

export default class Quote extends Component {
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
      <>
        <h2>A Quote</h2>
        <p><em>Words from a machine that might be fictional.</em></p>
        <p>{this.state.qod}<br /><small>-{this.state.author}</small></p>
      </>
    )
  }
}