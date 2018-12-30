import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo}  alt="logo" />
          <p>
            My Fishing, Kayaking, and Adventures
          </p>
        </header>
      </div>
    );
  }
}

export default App;
