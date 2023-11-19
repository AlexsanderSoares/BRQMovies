import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import {MovieScreen} from '../screens/Movie';
import {HomeScreen} from '../screens/Home';
import {Menu} from '../components/Menu';
import {MenuOptions} from '../components/Menu/types';
import {ExitIcon} from '../assets/icons';
import { signout } from '../utils/signout';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

const menuOptions: MenuOptions[] = [
  {
    id: '1',
    title: 'Sair',
    onPress: () => signout(),
    Icon: () => <ExitIcon />,
  },
];

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: 'BRQ Movies',
            headerStyle: {backgroundColor: '#16171B'},
            headerTitleStyle: {fontWeight: 'normal', fontSize: 22},
            headerTintColor: '#fff',
            headerRight: () => <Menu options={menuOptions} />,
          }}
        />
      </Stack.Navigator>
    </QueryClientProvider>
  );
}

export {AppRoutes};
