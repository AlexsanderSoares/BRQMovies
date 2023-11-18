import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { FloatingLabelInput } from './component';

describe('FloatingLabelInput', () => {
  it('updates label style on input focus and blur', async () => {
    const { getByTestId, getByText } = render(
      <FloatingLabelInput label="Test Label" value="" />,
    );

    const labelElement = getByText('Test Label');
    expect(labelElement).toBeTruthy();

    const inputElement = getByTestId('input-test-id');
    expect(inputElement).toBeTruthy();

    fireEvent(inputElement, 'focus');

    await waitFor(() => {
      const focusedLabelStyle = labelElement.props.style;
      expect(focusedLabelStyle).toMatchObject({
        top: 8,
        fontSize: 12,
      });
    });

    fireEvent(inputElement, 'blur');

    await waitFor(() => {
      const blurredLabelStyle = labelElement.props.style;
      expect(blurredLabelStyle).toMatchObject({
        top: 20,
        fontSize: 16,
      });
    });
  });
});
