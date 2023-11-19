import React from 'react';
import { render } from '@testing-library/react-native';
import { InfoCard } from './component';
import { Heart } from '../../assets/icons';

describe('InfoCard', () => {
  it('renders InfoCard with provided label, icon, and text', () => {
    const mockProps = {
      label: 'Information',
      Icon: () => <Heart />,
      text: 'This is a piece of information.',
    };

    const { getByText } = render(<InfoCard {...mockProps} />);

    const labelElement = getByText('Information');
    const textElement = getByText('This is a piece of information.');

    expect(labelElement).toBeDefined();
    expect(textElement).toBeDefined();
    // Adicione mais verificações conforme necessário
  });
});
