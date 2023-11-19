import React from 'react';
import { render } from '@testing-library/react-native';
import { FavoriteButton } from './component';

describe('FavoriteButton', () => {
  it('renders FavoriteButton with scrolled prop', () => {
    const { getByTestId } = render(<FavoriteButton scrolled={true} />);

    const containerElement = getByTestId('favorite-button-container');
    expect(containerElement).toBeTruthy();

  });

  it('renders FavoriteButton without scrolled prop', () => {
    const { getByTestId } = render(<FavoriteButton scrolled={false} />);

    const containerElement = getByTestId('favorite-button-container');
    expect(containerElement).toBeTruthy();
  });
});
