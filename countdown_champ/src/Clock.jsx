import React, { Component } from 'react';
import './App.css';

class Clock extends Component {
  constructor (props) {
    super(props);
    // declare some initial state for following variables
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  getTimeUntil (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    console.log('time', time);
  }

  render () {
    this.getTimeUntil(this.props.deadline);

    return (
      <div>
        <div className='Clock-days'>{this.state.days}</div>
        <div className='Clock-hours'>{this.state.hours}</div>
        <div className='Clock-minutes'>{this.state.minutes}</div>
        <div className='Clock-seconds'>{this.state.seconds}</div>
      </div>
    );
  }
}

export default Clock;
