import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchChonks } from '../../../actions/chonkActions';

const ChonkList = () => {
  const chonks = useSelector(state => state.chonkList);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchChonks());
  }, []);

  const chonkElements = chonks.map(chonk => (
    <li data-testid="chonk-list" key={chonk.id}>
      <p>{chonk.name}</p>
    </li>
  ));

  return (
    <ul>
      {chonkElements}
    </ul>
  );
};

export default ChonkList;


