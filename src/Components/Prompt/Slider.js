import React, { Component } from 'react';

export default class Slider extends Component {
  constructor() {
    super();
    this.state = { sliderValue: '' }
  }
  render() {
    return (
      <div className='slider'>
        <label htmlFor="mood">Rate your current mood.</label>
        <input type="range" id="mood" name="mood" min="0" max="10"></input>
      </div>
    );
  }
}


