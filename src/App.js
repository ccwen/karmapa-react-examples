import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple Counter</h2>
        </div>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}
