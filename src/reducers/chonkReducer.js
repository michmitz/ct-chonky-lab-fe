import { ADD_CHONK } from "../actions/chonkActions";

const initialState = {
  chonkList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHONK:
      return { ...state, chonkList: [action.payload, ...state.chonkList] };
    default:
      return state;
  }
}
