const SET_FACE = 'simple-counter/minesweeper/SET_FACE';
const SET_TIME = 'simple-counter/minesweeper/SET_TIME';
const SET_FLAG_COUNT = 'simple-counter/minesweeper/SET_FLAG_COUNT';

const initialState = {
  data: {},
  defaultRow: {
    face: '^_^',
    timeInSec: 0,
    flagCount: 0
  }
};

export default (state = initialState, action) => {

  const {id} = action;

  if (id) {
    state = createDefaultData(id, state);
  }

  switch (action.type) {
    case SET_FACE:
      state.data[id].face = action.face;
      return Object.assign({}, state);
    case SET_TIME:
      state.data[id].timeInSec = action.timeInSec;
      return Object.assign({}, state);
    case SET_FLAG_COUNT:
      state.data[id].flagCount = action.flagCount;
      return Object.assign({}, state);
    default:
      return state;
  }
};

function createDefaultData(id, state) {
  if (! state.data[id]) {
    state.data[id] = Object.assign({}, state.defaultRow);
    state = Object.assign({}, state);
  }
  return state;
}

export function setFace(id, face) {
  return {
    type: SET_FACE,
    id,
    face
  };
}

export function setTime(id, timeInSec) {
  return {
    type: SET_TIME,
    id,
    timeInSec
  };
}

export function setFlagCount(id, flagCount) {
  return {
    type: SET_FLAG_COUNT,
    id,
    flagCount
  };
}
