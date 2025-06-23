import React, { Component } from 'react';
import BuggyCounter from './BuggyCounter';
import ErrorBoundary from './ErrorBoundary';
import LifecycleComponent from './LifecycleComponent';
import Child from './Child';

// Enhanced Lifecycle Component for Exercise 3
class LifecycleWithChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red",
      show: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  toggleChild = () => {
    this.setState(prevState => ({ show: !prevState.show }));
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
        <button onClick={this.toggleChild} style={{ marginLeft: '10px' }}>
          {this.state.show ? 'Delete' : 'Show Child'}
        </button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>React Lifecycle Exercises</h1>
        
        {/* Exercise 1 - Simulation 1 */}
        <div style={{ marginBottom: '30px', border: '2px solid #333', padding: '15px' }}>
          <h2>Simulation 1: Two BuggyCounters in One ErrorBoundary</h2>
          <p>Both counters share the same error boundary. If one crashes, both disappear.</p>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        {/* Exercise 1 - Simulation 2 */}
        <div style={{ marginBottom: '30px', border: '2px solid #333', padding: '15px' }}>
          <h2>Simulation 2: Two BuggyCounters, Each in Its Own ErrorBoundary</h2>
          <p>Each counter has its own error boundary. If one crashes, the other continues working.</p>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
          <ErrorBoundary>
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        {/* Exercise 1 - Simulation 3 */}
        <div style={{ marginBottom: '30px', border: '2px solid #333', padding: '15px' }}>
          <h2>Simulation 3: BuggyCounter Without ErrorBoundary</h2>
          <p>No error boundary. When it crashes, the entire app crashes.</p>
          <BuggyCounter />
        </div>

        {/* Exercise 2 & 3 - Lifecycle Methods */}
        <div style={{ marginBottom: '30px', border: '2px solid #333', padding: '15px' }}>
          <h2>Exercise 2 & 3: Lifecycle Methods with Child Component</h2>
          <p>Open your browser's developer console to see lifecycle method logs.</p>
          <LifecycleWithChild />
        </div>
      </div>
    );
  }
}

export default App;