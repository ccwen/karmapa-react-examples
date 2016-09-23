const SET_FACE = 'simple-counter/minesweeper/SET_FACE';

const initialState = {
  face: '^_^'
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_FACE:
      return Object.assign({}, state, {face: action.face});
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
