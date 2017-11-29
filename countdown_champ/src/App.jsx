import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

// deadline defined here and assigned to props
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: 'December 25, 2017',
      newDeadline: ''
    };
  }

  changeDeadline () {
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  // replaced all divs with Clock component
  // added the current deadline to Parent App which will pass to Child Clock.jsx
  // Clock.jsx will see this deadline as props
  render () {
    return (
      <div className='App'>
        <div className='App-title'>
        Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline} />
        <div>
          <input placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
