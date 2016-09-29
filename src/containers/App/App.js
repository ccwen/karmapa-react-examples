import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';

import './App.css';

class App extends Component {

  static propTypes = {
    children: PropTypes.object
  };

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <ul className="App-nav">
            <li>
              <Link to="/foo">page foo</Link>
            </li>
            <li>
              <Link to="/bar">page bar</Link>
            </li>
          </ul>
          <h2>Simple Router</h2>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
