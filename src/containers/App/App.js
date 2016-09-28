import React, {Component} from 'react';

import SpreadsheetContainer from './../SpreadsheetContainer/SpreadsheetContainer';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Spreadsheet</h2>
        </div>
        <SpreadsheetContainer width={10} height={10} />
      </div>
    );
  }
}

export default App;
