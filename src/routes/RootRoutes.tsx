import React from 'react';
import { MMKV } from 'react-native-mmkv';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';
import { NavigationContainer, NavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import NavigationService from '../services/NavigationService'

const mmkv = new MMKV()

const Stack = createNativeStackNavigator();

function RootRoutes() {

    const token = mmkv.getString('token')

    const navigationRef = React.useRef<NavigationContainerRef<RootStackParamList>>(null);

    React.useEffect(() => {
        NavigationService.setTopLevelNavigator(navigationRef.current);
    }, []);

    return (
        <NavigationContainer ref={navigationRef}>
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
