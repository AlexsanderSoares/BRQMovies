import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { SubitButton } from './component';

describe('SubmitButton', () => {
  it('renders SubmitButton with provided label', () => {
    const mockProps = {
      active: true,
      label: 'Submit',
      onPress: jest.fn(), 
    };

    const { getByText } = render(<SubitButton {...mockProps} />);
    const buttonElement = getByText('Submit');

    expect(buttonElement).toBeDefined();

  });

  it('fires onPress function when button is pressed', () => {
    const mockProps = {
      active: true,
      label: 'Submit',
      onPress: jest.fn(),
    };

    const { getByText } = render(<SubitButton {...mockProps} />);
    const buttonElement = getByText('Submit');

    fireEvent.press(buttonElement);

    expect(mockProps.onPress).toHaveBeenCalled();
  });
});
