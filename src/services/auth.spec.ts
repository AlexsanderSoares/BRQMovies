import { signIn } from './auth'; // Substitua com o caminho correto para o arquivo signIn

describe('signIn function', () => {
  it('should resolve with token when valid credentials are provided', async () => {
    const user = 'user';
    const password = '123';

    const result = await signIn(user, password);

    expect(result).toEqual(expect.any(String));
  });

  it('should reject with an error message when invalid credentials are provided', async () => {
    const user = 'invalidUser';
    const password = 'invalidPassword';

    await expect(signIn(user, password)).rejects.toEqual('Invalid Credentials');
  });
});
