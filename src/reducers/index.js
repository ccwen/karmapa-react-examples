import {combineReducers} from 'redux';
import counter from './counter';
import minesweeper from './minesweeper';

const rootReducer = combineReducers({
  counter,
  minesweeper
});

export default rootReducer;
