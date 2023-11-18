import { useState } from 'react';
import { signIn } from '../services/auth';
import { MMKV } from 'react-native-mmkv'

const mmkv = new MMKV()

const useAuth = () => {
  const [token, setToken] = useState(mmkv.getString('token'));

  const validateLogin = () => {
    
  }

  const login = async ({username, password} : {username: string, password: string}) => {
    try {
      const token = await signIn(username, password);
      
      if (token) {
        mmkv.set('token', token);
        setToken(token);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error)
      return false;
    }
  };

  const logout = () => {
    mmkv.delete('token');
    setToken(undefined);
  };

  return { token, login, logout };
};

export {useAuth};
