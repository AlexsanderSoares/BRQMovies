import { act, renderHook } from '@testing-library/react-hooks';
import useLoginForm from './component.hook';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

// Mock do hook useAuth
jest.mock('../../hooks/auth', () => ({
  useAuth: jest.fn(),
}));

describe('useLoginForm', () => {
  const mockLogin = jest.fn(); // Mock da função login

  beforeEach(() => {
    jest.clearAllMocks();

    // Simulando o retorno do hook useAuth
    require('../../hooks/auth').useAuth.mockReturnValue({
      login: mockLogin,
    });
  });

  it('deve chamar login quando o formulário for submetido com dados válidos', async () => {
    const { result } = renderHook(() => useLoginForm());

    // Simula a validação do formulário com dados válidos
    act(() => {
      result.current.formik.values.username = 'usuarioteste';
      result.current.formik.values.password = '123';
    });

    // Chama a função handleLogin para simular a submissão do formulário
    await act(async () => {
      await result.current.handleLogin();
    });

    // Verifica se a função login foi chamada corretamente
    expect(mockLogin).toHaveBeenCalledWith({
      username: 'usuarioteste',
      password: '123',
    });
  });
});
