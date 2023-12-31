import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/Login';

const Stack = createNativeStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {AuthRoutes};
