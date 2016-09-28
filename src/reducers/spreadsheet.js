import storage from './../helpers/storage';

const SET_DATA = 'react-example/spreadsheet/SET_DATA';

export default (state = {data: storage.get('spreadsheetData') || {}}, action) => {

  switch (action.type) {
    case SET_DATA:
      const {x, y, value} = action;
      let data = state.data;
      data[x + ':' + y] = value;
      return Object.assign({}, state, {data});
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
