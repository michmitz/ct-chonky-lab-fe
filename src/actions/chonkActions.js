import { sendChonk } from "../services/chonksAPI"

export const ADD_CHONK = 'ADD_CHONK';
export const addChonk = chonk => ({
  type: ADD_CHONK,
  payload: chonk
});


export const createChonk = chonk => dispatch => {
  sendChonk(chonk)
    .then(createdChonk => {
      dispatch(addChonk(createdChonk));
    });
}