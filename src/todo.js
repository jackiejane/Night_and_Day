import React, { Component } from 'react';
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';

class Todo extends Component {
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
      <ReactQuill
        value={this.state.text}
        onChange={this.handleChange}
        placeholder='Use this area to keep notes and reminders.'
        style={{
          height: '94%'
        }}></ReactQuill>
    )
  }
}

export default Todo;