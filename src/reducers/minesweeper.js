const SET_FACE = 'simple-counter/minesweeper/SET_FACE';
const SET_TIME = 'simple-counter/minesweeper/SET_TIME';
const SET_FLAG_COUNT = 'simple-counter/minesweeper/SET_FLAG_COUNT';

const initialState = {
  face: '^_^',
  timeInSec: 0,
  flagCount: 0
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_FACE:
      return Object.assign({}, state, {face: action.face});
    case SET_TIME:
      return Object.assign({}, state, {timeInSec: action.timeInSec});
    case SET_FLAG_COUNT:
      return Object.assign({}, state, {flagCount: action.flagCount});
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

export function setFlagCount(flagCount) {
  return {
    type: SET_FLAG_COUNT,
    flagCount
  };
}
