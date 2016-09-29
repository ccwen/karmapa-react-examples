import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import App from './containers/App/App';
import Foo from './containers/Foo/Foo';
import Bar from './containers/Bar/Bar';

import './index.css';
import reducer from './reducers/';
import storageSyncer from './middleware/storageSyncer';
import logger from './middleware/logger';

const store = createStore(reducer, applyMiddleware(logger, storageSyncer));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="foo" component={Foo} />
        <Route path="bar" component={Bar} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
