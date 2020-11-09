import { sendChonk, getChonks, scrapChonk } from "../services/chonksAPI"

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

export const DELETE_CHONK = 'DELETE_CHONK';
export const deleteChonk = chonk => ({
  type: DELETE_CHONK,
  payload: chonk
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

export const removeChonk = id => dispatch => {
  scrapChonk(id)
    .then(chonk => {
      dispatch(deleteChonk(chonk.id));
    });
};

