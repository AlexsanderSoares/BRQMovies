import { renderHook, act } from '@testing-library/react-hooks';
import useLoginForm from './component.hook';

describe('useLoginForm', () => {
  it('should submit valid form', async () => {
    const { result } = renderHook(() => useLoginForm());

    const { formik, handleLogin } = result.current;

    act(() => {
      formik.setValues({ username: 'user123', password: '1234' });
    });

    await act(async () => {
      await handleLogin();
    });

  });
});
