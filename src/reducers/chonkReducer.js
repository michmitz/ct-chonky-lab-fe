import { ADD_CHONK, SET_CHONKS } from "../actions/chonkActions";

const initialState = {
  chonkList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHONK:
      return { ...state, chonkList: [action.payload, ...state.chonkList] };
    case SET_CHONKS:
      return { ...state, chonkList: action.payload };
    default:
      return state;
  }
}
