import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Counter from './../../components/Counter/Counter';
import store from './../../store';

export default class App extends Component {

  render() {

    const counterProps = {
      value: store.getState(),
      onIncrement: () => store.dispatch({type: 'INCREMENT'}),
      onDecrement: () => store.dispatch({type: 'DECREMENT'})
    };

    console.log('here', store.getState());

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Simple Counter</h2>
        </div>
        <div>
          <Counter {...counterProps} />
        </div>
      </div>
    );
  }
}
