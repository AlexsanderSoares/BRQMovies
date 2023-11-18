import React from 'react';
import { View } from 'react-native';
import { FloatingLabelInput } from '../../components/FloatingLabelInput';
import { CleanIcon, PasswordIcon, UserIcon } from '../../assets/icons';
import { LogoImage } from '../../assets/images';

// import { Container } from './styles';

const LoginScreen: React.FC = () => {

  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={{flex: 1, backgroundColor:'#16171B', alignItems: 'center'}}>
      <LogoImage/>
      <FloatingLabelInput label="Usuário"
        value={user}
        onChangeText={(value: string) => setUser(value)}
        LeftIcon={() => <UserIcon/>}
        RightIcon={() => <CleanIcon/>}
      />
      <FloatingLabelInput label="Usuário"
        value={password}
        onChangeText={(value: string) => setPassword(value)}
        LeftIcon={() => <PasswordIcon/>}
        RightIcon={() => <CleanIcon/>}
      />
    </View>
  );
}

export {LoginScreen};