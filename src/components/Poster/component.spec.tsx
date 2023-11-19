import React from 'react';
import { render } from '@testing-library/react-native';
import { Poster } from './component';

const mockProps = {
  image: 'example_image.jpg',
};

describe('Poster', () => {
  it('renders Poster with provided image', () => {
    const { getByTestId } = render(<Poster {...mockProps} />);
    const containerElement = getByTestId('poster-container');
    const backgroundImageElement = getByTestId('poster-background-image');

    expect(containerElement).toBeDefined();
    expect(backgroundImageElement).toBeDefined();
  });
});
