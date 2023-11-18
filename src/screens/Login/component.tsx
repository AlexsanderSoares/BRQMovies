import React, { useEffect } from 'react';
import { Button, View } from 'react-native';
import { FloatingLabelInput } from '../../components/FloatingLabelInput';
import { CleanIcon, PasswordIcon, UserIcon } from '../../assets/icons';
import { LogoImage } from '../../assets/images';
import { useForm, Controller } from 'react-hook-form';
import { SubitButton } from '../../components/SubitButton';

import { Container, ForgotPasswordButton, ForgotPasswordText, ImageContainer, InputContainer } from './styles';

const LoginScreen: React.FC = () => {

  const {control, handleSubmit, setValue, formState} = useForm()
  const {errors} = formState;

  return (
    <Container>
      <ImageContainer>
        <LogoImage/>
      </ImageContainer>
      <InputContainer>
        <Controller
          control={control}
          name="user"
          rules={{
            required: 'Este campo é obrigatório',
          }}
          render={({ field: { onChange, value } }) => (
            <FloatingLabelInput 
              label="Usuário"
              onChangeText={onChange}
              value={value}
              LeftIcon={() => <UserIcon/>}
              RightIcon={() => <CleanIcon onPress={() => setValue('user', '')}/>}
            />
          )}
        />
      </InputContainer>
      <InputContainer>
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Este campo é obrigatório',
            pattern: {
              value: /^[0-9]+$/,
              message: 'Por favor, insira apenas números',
            },
          }}
          render={({ field: { onChange, value } }) => (
            <FloatingLabelInput 
              label="Senha"
              onChangeText={onChange}
              value={value}
              LeftIcon={() => <PasswordIcon/>}
              RightIcon={() => <CleanIcon onPress={() => setValue('password', '')}/>}
              secureTextEntry={true}
              keyboardType='numeric'
            />
          )}
        />
      </InputContainer>
      <SubitButton label="Entrar" active={true} />
      <ForgotPasswordButton>
        <ForgotPasswordText>
          Esqueci a senha
        </ForgotPasswordText>
      </ForgotPasswordButton>
    </Container>
  );
}

export {LoginScreen};