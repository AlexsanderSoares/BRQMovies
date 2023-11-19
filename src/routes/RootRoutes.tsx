import React from 'react';
import { MMKV } from 'react-native-mmkv';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const mmkv = new MMKV()

const Stack = createNativeStackNavigator();

function RootRoutes() {

    const token = mmkv.getString('token')

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={token ? 'App' : 'Auth'}>
                <Stack.Screen
                    name="Auth"
                    component={AuthRoutes}
                    options={{headerShown: false}}
                />
                <Stack.Screen
                    name="App"
                    component={AppRoutes}
                    options={{headerShown: false}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export {RootRoutes};
