import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { getChonks } from '../../../services/chonksAPI';
import ChonkList from './ChonkList';
import store from '../../../store';

jest.mock('../../../services/chonksAPI.js');

describe('ChonkList component', () => {
  it('displays a list of chonks', async() => {
    getChonks.mockResolvedValue([
      { id: 1, 
        name: 'Cinderblock', 
        weight: 10,
        description: 'Instagram famous cat that refused to exercise',
        imageUrl: 'http://cinderblock.com/cinderblock.png' }
    ])
    
    render(
      <Provider store={store}>
      <ChonkList />
      </Provider>
    );

    const chonkList = await screen.findByTestId('chonk-list');

    return waitFor(() => {
      expect(chonkList).not.toBeEmptyDOMElement();
    });
  });
});