import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CreateChonkForm from './CreateChonkForm';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('CreateChonkForm component', () => {
  afterEach(() => cleanup());
  it('renders CreateChonkForm', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CreateChonkForm />
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});