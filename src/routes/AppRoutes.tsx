import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';
import { MovieScreen } from '../screens/Movie';
import { HomeScreen } from '../screens/Home';
import { OptionsIcon } from '../assets/icons';

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

function AppRoutes() {
  return (
    <QueryClientProvider client={queryClient}>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Movie"
                component={MovieScreen}
                options={{
                    headerShown: false
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
                    headerRight: () => <OptionsIcon />,
                }}
            />
        </Stack.Navigator>
    </QueryClientProvider>
  );
}

export {AppRoutes};
