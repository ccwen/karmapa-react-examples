import {combineReducers} from 'redux';
import counter from './counter';
import minesweeper from './minesweeper';
import spreadsheet from './spreadsheet';

const rootReducer = combineReducers({
  counter,
  minesweeper,
  spreadsheet
});

export default rootReducer;
