import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {

  static propTypes = {
    value: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Spreadsheet</h2>
        </div>
      </div>
    );
  }
}

export default connect(state => ({}))(App);
