import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChonks, removeChonk } from '../../../actions/chonkActions';

const ChonkList = () => {
  const chonks = useSelector(state => state.chonkList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchChonks());
  }, []);

  const handleDelete = ({ target }) => {
    dispatch(removeChonk(target.value));
  };

  const chonkElements = chonks.map(chonk => (
    <li data-testid="chonk-list" key={chonk.id}>
      <p>{chonk.name}</p>
      <button value={chonk.id} onClick={handleDelete}>Delete?</button>
    </li>
  ));

  return (
    <ul>
      {chonkElements}
    </ul>
  );
};

export default ChonkList;


