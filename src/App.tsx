import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './screens/Login/component';
import { HomeScreen } from './screens/Home/component';
import { OptionsIcon } from './assets/icons';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#16171B');

  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Home'>
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerTitle: 'BRQ Movies', 
          headerStyle: {backgroundColor: '#16171B'},
          headerTitleStyle: {fontWeight: 'normal', fontSize: 22},
          headerTintColor: '#fff',
          headerRight: () => <OptionsIcon/>}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;