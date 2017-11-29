import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';
// import from react-bootstrap
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: 'March 13, 2018',
      newDeadline: ''
    };
  }

  changeDeadline () {
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  // change divs to react-bootstrap Form, FormControl, Button
  // Form inline={true}
  render () {
    return (
      <div className='App'>
        <div className='App-title'>
        Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline} />
        <Form inline>
          <FormControl className='Deadline-input' placeholder='new date' onChange={event => this.setState({newDeadline: event.target.value})} />
          <Button onClick={() => this.changeDeadline()}>Submit</Button>
        </Form>
      </div>
    );
  }
}

export default App;
