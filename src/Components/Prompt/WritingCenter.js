import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

export default class WritingCenter extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      min: 5,
      sec: 0,
      timerOn: true
    }
    this.handleChange = this.handleChange.bind(this)
  }
  resetSec = () => {
    if (this.state.min > 0) {
      this.setState({
        min: this.state.min - 1,
        sec: 59
      })
      this.timeKeeper()
    }
  }
  subtractSec = () => {
    this.setState({
      sec: this.state.sec - 1
    })
    this.timeKeeper()
  }
  timeKeeper = () => {
    if (this.state.sec > 0) {
      setTimeout(() => { this.subtractSec() }, 1000)
    } else if (this.state.sec === 0) {
      setTimeout(() => { this.resetSec() }, 1000)
    }
  }
  handleTimer = () => {
    if (this.state.timerOn === true) {
      this.setState({
        timerOn: false
      })
      this.timeKeeper()
    }
  }
  handleChange(value) {
    this.setState({
      text: value
    })
  }

  render() {
    return (
      <>
        <div className='clock'>
          <p>{this.state.min}:
            {this.state.sec > 9 ? this.state.sec : '0' + this.state.sec}
          </p>
        </div>
        <div className='writingCenter' style={{
          color: 'black'
        }}>
          <ReactQuill
            className='textEditor'
            value={this.state.text}
            onChange={this.handleChange}
            onKeyDown={this.handleTimer}
            placeholder='Use this area to keep
          notes and reminders.'>
          </ReactQuill>
        </div>
      </>
    )
  }
}