import { renderHook, act } from '@testing-library/react-hooks';
import {useAuth} from './auth';
import * as authModule from '../services/auth';

jest.mock('react-native-mmkv', () => {
  const mockMMKV = {
    getString: jest.fn(),
    set: jest.fn(),
    delete: jest.fn(),
  };

  return {
    __esModule: true,
    MMKV: jest.fn(() => mockMMKV),
  };
});

describe('useAuth', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should handle login and logout correctly', async () => {
    const mockedToken = 'mockedToken123';
    const mockedUsername = 'username';
    const mockedPassword = 'password';

    const signInMock = jest.spyOn(authModule, 'signIn');
    signInMock.mockResolvedValue(mockedToken);

    const { result } = renderHook(() => useAuth());

    expect(result.current.token).toBeUndefined();

    await act(async () => {
      const loginResult = await result.current.login({
        username: mockedUsername,
        password: mockedPassword,
      });
      expect(loginResult).toBe(true);
    });

    expect(result.current.token).toBe(mockedToken);
    expect(result.current.logout).toBeDefined();

    act(() => {
      result.current.logout();
    });

    expect(result.current.token).toBeUndefined();
  });
});
