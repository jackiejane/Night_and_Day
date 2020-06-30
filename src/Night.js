import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Night extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main className='night'>
        
        <div className='nightInput'>
          <div className='textClock'>
            <p className='text'>
              Take five minutes to write down whatever comes to mind.
              The timer will let you know when time is up.
            </p>
            <div className='clock'>
            <p>CLOCK</p>
            </div>
          </div>
          <input type='text' className='writingCenter'></input>
          <Link to='/night'><button>Submit</button></Link>
        </div>
      </main>
    );
  }
}

export default Night;