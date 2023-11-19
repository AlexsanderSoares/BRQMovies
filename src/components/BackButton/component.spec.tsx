import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BackButton } from './component';

const mockGoBack = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: mockGoBack,
  }),
}));

describe('BackButton', () => {
  it('renderiza corretamente e executa a função de voltar ao ser pressionado', () => {
    const { getByTestId } = render(<BackButton />);

    const backButton = getByTestId('backButton');
    expect(backButton).toBeTruthy();

    fireEvent.press(backButton);
    expect(mockGoBack).toHaveBeenCalled();
  });
});
