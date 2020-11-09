import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import ChonkList from './ChonkList/ChonkList';
import CreateChonkForm from './CreateChonkForm/CreateChonkForm';

export default function App() {
  return (
    <Provider store={store}>
      <CreateChonkForm />
      <ChonkList />
    </Provider>
  );
}
