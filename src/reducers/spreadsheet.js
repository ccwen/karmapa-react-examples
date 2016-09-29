import storage from './../helpers/storage';

const SET_DATA = 'react-example/spreadsheet/SET_DATA';
const SET_WIDTH = 'react-example/spreadsheet/SET_WIDTH';
const SET_HEIGHT = 'react-example/spreadsheet/SET_HEIGHT';
const SET_DISPLAY_WIDTH = 'react-example/spreadsheet/SET_DISPLAY_WIDTH';
const SET_DISPLAY_HEIGHT = 'react-example/spreadsheet/SET_DISPLAY_HEIGHT';

const initialState = {
  displayWidth: '10',
  displayHeight: '10',
  width: 10,
  height: 10,
  data: storage.get('spreadsheetData') || {}
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_DATA:
      const {x, y, value} = action;
      let data = state.data;
      data[x + ':' + y] = value;
      const newData = Object.assign({}, data);
      return Object.assign({}, state, {data: newData});
    case SET_WIDTH:
      return Object.assign({}, state, {width: action.width});
    case SET_HEIGHT:
      return Object.assign({}, state, {height: action.height});
    case SET_DISPLAY_WIDTH:
      return Object.assign({}, state, {displayWidth: action.displayWidth});
    case SET_DISPLAY_HEIGHT:
      return Object.assign({}, state, {displayHeight: action.displayHeight});
    default:
      return state;
  }
};

export function setData(x, y, value) {
  return {
    type: SET_DATA,
    x,
    y,
    value
  };
}

export function setWidth(width) {
  return {
    type: SET_WIDTH,
    width
  };
}

export function setHeight(height) {
  return {
    type: SET_HEIGHT,
    height
  };
}

export function setDisplayWidth(displayWidth) {
  return {
    type: SET_DISPLAY_WIDTH,
    displayWidth
  };
}

export function setDisplayHeight(displayHeight) {
  return {
    type: SET_DISPLAY_HEIGHT,
    displayHeight
  };
}
