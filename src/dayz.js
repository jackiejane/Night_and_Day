import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WritingCenter from './Components/WritingCenter'
import Slider from './Components/Slider'
import SubButton from './Components/SubButton'

class Dayz extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <main>
        <div></div>
        <div className='prompt'>
          <p className='text'>Take five minutes to write down
          whatever comes to mind.</p>
          <WritingCenter />
          <Slider />
          <Link to='/summary'>
            <SubButton />
          </Link>
        </div>
      </main>
    );
  }
}

export default Dayz;