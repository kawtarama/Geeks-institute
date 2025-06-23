import React, { Component } from 'react';

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => {
      const newCounter = prevState.counter + 1;
      if (newCounter === 5) {
        throw new Error('I crashed!');
      }
      return { counter: newCounter };
    });
  };

  render() {
    return (
      <div style={{ padding: '10px', margin: '10px', border: '1px solid #ccc' }}>
        <h3>Counter: {this.state.counter}</h3>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default BuggyCounter;