import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TableContainer from './TableContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Github Issues Table</h1>
        </header>
        <TableContainer />
      </div>
    );
  }
}

export default App;
