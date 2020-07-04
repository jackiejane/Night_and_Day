import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Triangle extends Component {
  constructor() {
    super();
    this.state = {
      time: ''
    }
  }
  componentWillMount() {
    let today = new Date()
    let time1 = today.getHours()
    console.log(time1)
    console.log(time1)
    if (time1 > 18) {
      this.setState({
        time: false
      })
    } else {
      this.setState({
        time: true
      })
    }
  }
  render() {
    return (
      <>
        {this.state.time ?
          <Link to='/day' className='mainSubmit'>
            <div>
              <h1 className='title'>/ Night /</h1>
              <p>An app for self-reflection.</p>
              <h1 className='title'>\ Day \</h1>
            </div>
          </Link>
          :
          <Link to='/night' className='mainSubmit'>
            <div>
              <h1 className='title'>/ Night /</h1>
              <p>An app for self-reflection. <br /> For optimal experience, <br /> please allow the site access to your location. </p>
              <h1 className='title'>\ Day \</h1>
            </div>
          </Link>}
        <div className='pinkTriangle'></div>
        <div className='triangle'></div>
      </>
    );
  }
}