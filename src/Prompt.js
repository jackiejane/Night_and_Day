import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import WritingCenter from './Components/Prompt/WritingCenter'
import Slider from './Components/Prompt/Slider'
import SubButton from './Components/Prompt/SubButton'

export default class Prompt extends Component {
  constructor() {
    super();
    this.state = {
      time: ''
    }
  }
  componentWillMount() {
    let today = new Date()
    let time1 = today.getHours()
    if (time1 > 18 || time1 < 6) {
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
          <main style={{
            backgroundImage:
              `url(https://i.imgur.com/owonS9z.jpg)`,
            backgroundSize: 'cover'
          }}>
            <div className='dayPrompt'>
              <p className='text'>Take five minutes to write down
            whatever comes to mind.</p>
              <WritingCenter />
              <Slider />
              <Link to='/summary'>
                <SubButton />
              </Link>
            </div>
          </main>
          :
          <main style={{
            backgroundImage: `url('https://i.imgur.com/19vXbsV.jpg')`,
            backgroundSize: 'cover',
          }}>
            <div className='dayPrompt' style={{
              backgroundColor: `rgba(58, 46, 46, 0.8)`,
              color: 'white'
            }}>
              <p className='text'>Reflect on your day. For the next five minutes, write whatever comes to your mind.</p>
              <WritingCenter />
              <Slider />
              <Link to='/summary'>
                <SubButton />
              </Link>
            </div>
          </main>
        }
      </>
    );
  }
}
