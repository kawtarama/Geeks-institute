import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: "red"
    };
  }

  componentDidMount() {
    // After 1 second, change color to yellow
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called");
    return true; // Set to false to prevent updates
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    console.log("Previous state:", prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("after update");
    console.log("Component updated from", prevState.favoriteColor, "to", this.state.favoriteColor);
  }

  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <h1>My Favorite Color is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to Blue</button>
      </div>
    );
  }
}

export default LifecycleComponent;