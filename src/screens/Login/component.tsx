import React from 'react';
import * as yup from 'yup';
import {FloatingLabelInput} from '../../components/FloatingLabelInput';
import {CleanIcon, PasswordIcon, UserIcon} from '../../assets/icons';
import {LogoImage} from '../../assets/images';
import {SubitButton} from '../../components/SubitButton';
import {
  Container,
  ErrorMessageText,
  ForgotPasswordButton,
  ForgotPasswordText,
  ImageContainer,
  InputContainer,
} from './styles';
import {useAuth} from '../../hooks/auth';
import useLoginForm from './component.hook';
import {Platform} from 'react-native';

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'O nome de usuário deve ter no mínimo 4 caracteres')
    .required('O nome é obrigatório'),
  password: yup
    .string()
    .matches(/^[0-9]+$/, 'A senha deve conter apenas números')
    .min(3, 'A senha deve ter no mínimo 3 dígitos')
    .required('A senha é obrigatória'),
});

const LoginScreen: React.FC = () => {
  const {login} = useAuth();
  const {formik, handleLogin} = useLoginForm();

  return (
    <Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ImageContainer>
        <LogoImage />
      </ImageContainer>
      <InputContainer>
        <FloatingLabelInput
          label="Usuário"
          onChangeText={formik.handleChange('username')}
          value={formik.values.username}
          LeftIcon={() => <UserIcon />}
          RightIcon={() => (
            <CleanIcon onPress={() => formik.setFieldValue('username', '')} />
          )}
          error={!!formik.errors.username}
        />
        {formik.touched.username && formik.errors.username ? (
          <ErrorMessageText>{formik.errors.username}</ErrorMessageText>
        ) : null}
      </InputContainer>
      <InputContainer>
        <FloatingLabelInput
          label="Senha"
          onChangeText={formik.handleChange('password')}
          value={formik.values.password}
          LeftIcon={() => <PasswordIcon />}
          RightIcon={() => (
            <CleanIcon onPress={() => formik.setFieldValue('password', '')} />
          )}
          secureTextEntry={true}
          keyboardType="numeric"
          error={!!formik.errors.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <ErrorMessageText>{formik.errors.password}</ErrorMessageText>
        ) : null}
      </InputContainer>
      <SubitButton
        label="Entrar"
        active={!!formik.values.username && !!formik.values.password}
        onPress={() => handleLogin()}
      />
      <ForgotPasswordButton>
        <ForgotPasswordText>Esqueci a senha</ForgotPasswordText>
      </ForgotPasswordButton>
    </Container>
  );
};

export {LoginScreen};
