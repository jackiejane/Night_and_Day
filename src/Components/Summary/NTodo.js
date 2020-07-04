import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(value) {
    this.setState({
      text: value
    })
  }
  render() {
    return (
      <div className='nTodo'>
        <div style={{
          color: 'white',
          textAlign: 'center'
        }}>
          <h2>Notes and Reminders</h2>
        </div>
        <ReactQuill
          value={this.state.text}
          onChange={this.handleChange}
          style={{
            height: '94%',
            color: 'white'
          }}>
        </ReactQuill>
      </div>
    )
  }
}