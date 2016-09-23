const SET_FACE = 'simple-counter/minesweeper/SET_FACE';
const SET_TIME = 'simple-counter/minesweeper/SET_TIME';

const initialState = {
  face: '^_^',
  timeInSec: 0
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_FACE:
      return Object.assign({}, state, {face: action.face});
    case SET_TIME:
      return Object.assign({}, state, {timeInSec: action.timeInSec});
    default:
      return state;
  }
};

export function setFace(face) {
  return {
    type: SET_FACE,
    face
  };
}

export function setTime(timeInSec) {
  return {
    type: SET_TIME,
    timeInSec
  };
}
