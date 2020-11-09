import { ADD_CHONK, SET_CHONKS, DELETE_CHONK } from "../actions/chonkActions";

const initialState = {
  chonkList: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case ADD_CHONK:
      return { ...state, chonkList: [action.payload, ...state.chonkList] };
    case SET_CHONKS:
      return { ...state, chonkList: action.payload };
    case DELETE_CHONK:
      return { 
        ...state,
        chonkList: state.chonkList.filter(chonk => chonk.id !== action.payload)
      };
    default:
      return state;
  }
}
