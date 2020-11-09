import { sendChonk, getChonks } from "../services/chonksAPI"

export const ADD_CHONK = 'ADD_CHONK';
export const addChonk = chonk => ({
  type: ADD_CHONK,
  payload: chonk
});

export const SET_CHONKS = 'SET_CHONKS';
export const setChonks = chonks => ({
  type: SET_CHONKS,
  payload: chonks
});


export const createChonk = chonk => dispatch => {
  sendChonk(chonk)
    .then(createdChonk => {
      dispatch(addChonk(createdChonk));
    });
};

export const fetchChonks = () => dispatch => {
  getChonks()
    .then(chonks => {
      dispatch(setChonks(chonks));
    });
};

