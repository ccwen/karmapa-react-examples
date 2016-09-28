const SET_DATA = 'react-example/spreadsheet/SET_DATA';

export default (state = {data: {}}, action) => {

  switch (action.type) {
    case SET_DATA:
      const {x, y, value} = action;
      return Object.assign({}, state, {[x + ':' + y]: value});
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
