import React from 'react';
import { Provider } from 'react-redux';
import store from '../../store';
import CreateChonkForm from './CreateChonkForm/CreateChonkForm';

export default function App() {
  return (
    <Provider store={store}>
      <CreateChonkForm />
    </Provider>
  );
}
