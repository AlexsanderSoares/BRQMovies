import React from 'react';
import { render } from '@testing-library/react-native';
import { MovieCard } from './component';

const mockProps = {
  image: 'example_image.jpg',
  onPress: jest.fn(),
};

describe('MovieCard', () => {
  it('renders MovieCard with provided image', () => {
    const { getByTestId } = render(<MovieCard {...mockProps} />);
    const containerElement = getByTestId('movie-card-container');
    const backgroundImageElement = getByTestId('movie-card-background-image');

    expect(containerElement).toBeDefined();
    expect(backgroundImageElement).toBeDefined();
  });
});
