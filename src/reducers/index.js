import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import counter from './counter';
import minesweeper from './minesweeper';
import spreadsheet from './spreadsheet';

const rootReducer = combineReducers({
  counter,
  minesweeper,
  spreadsheet,
  routing: routerReducer
});

export default rootReducer;
