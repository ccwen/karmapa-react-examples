import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App/App';
import './index.css';
import reducer from './reducers/';
import logger from './middleware/logger';

const store = createStore(reducer, applyMiddleware(logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
