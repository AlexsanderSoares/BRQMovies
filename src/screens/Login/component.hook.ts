import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../../hooks/auth';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../routes/types';
import { CommonActions } from '@react-navigation/native';

const useLoginForm = () => {

  const {login} = useAuth()
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  const loginSchema = yup.object().shape({
    username: yup.string().min(4, 'O nome de usuário deve ter no mínimo 4 caracteres').required('O nome de usuário é obrigatório'),
    password: yup
      .string()
      .matches(/^\d+$/, 'A senha deve conter apenas números')
      .min(3, 'A senha deve ter no mínimo 3 dígitos')
      .required('A senha é obrigatória'),
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values: {username: string, password: string}) => {
      if (formik.isValid) {
        const isAuth = await login({username: values.username, password: values.password})

        if(isAuth){
          navigation.reset({
            index: 0,
            routes: [{ name: 'App' }],
          })
        }
      }
    },
  });

  const handleLogin = () => {
    formik.handleSubmit();
  };

  return { formik, handleLogin };
};

export default useLoginForm;
