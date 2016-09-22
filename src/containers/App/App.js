import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import logo from './logo.svg';
import './App.css';
import Counter from './../../components/Counter/Counter';
import {increment, decrement} from './../../reducers/counter';

class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {

    const {value, increment, decrement} = this.props;

    const counterProps = {
      value,
      onIncrement: increment,
      onDecrement: decrement
    };

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

export default connect(state => ({
  value: state.counter
}), {increment, decrement})(App);
