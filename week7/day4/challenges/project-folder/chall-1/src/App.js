import React, { Component } from 'react';

class App extends Component {
  state = {
    messageFromServer: '',
    inputValue: '',
    responseMessage: '',
  };

  async componentDidMount() {
    const res = await fetch('http://localhost:5000/api/hello');
    const text = await res.text();
    this.setState({ messageFromServer: text });
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/world', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: this.state.inputValue }),
    });
    const text = await res.text();
    this.setState({ responseMessage: text });
  };

  render() {
    const { messageFromServer, inputValue, responseMessage } = this.state;
    return (
      <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
        <h1>{messageFromServer}</h1>

        <form onSubmit={this.handleSubmit} style={{ marginTop: '2rem' }}>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange}
            placeholder="Tapez un message"
            style={{ padding: '0.5rem', width: '300px' }}
          />
          <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem' }}>
            Envoyer
          </button>
        </form>

        {responseMessage && (
          <p style={{ marginTop: '1rem', color: 'green' }}>
            {responseMessage}
          </p>
        )}
      </div>
    );
  }
}

export default App;
