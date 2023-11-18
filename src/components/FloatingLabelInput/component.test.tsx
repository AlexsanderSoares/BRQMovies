import React, { ReactElement } from 'react';
import { render } from '@testing-library/react-native';
import { FloatingLabelInput } from './component';

const MockLeftIcon: ReactElement = <></>;
const MockRightIcon: ReactElement = <></>; 

describe('FloatingLabelInput', () => {
  it('renderiza corretamente', () => {
    const mockProps = {
      label: 'Nome',
      LeftIcon: () => MockLeftIcon, // Usar o componente de ícone mockado
      RightIcon: () => MockRightIcon, // Mock do componente RightIcon
      error: false,
      value: '',
      onChangeText: jest.fn(),
    };

    const { getByText } = render(<FloatingLabelInput {...mockProps} />);
    const labelElement = getByText('Nome');

    expect(labelElement).toBeDefined();
    // Adicione aqui mais verificações conforme necessário para os elementos renderizados
  });
});
