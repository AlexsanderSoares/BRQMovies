import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {AllMovies} from '../screens/AllMovies';
import { FavoritMovies } from '../screens/FavoritMovies';

const Tab = createMaterialTopTabNavigator();

const TopTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EC8B00',
        tabBarInactiveTintColor: '#A9A9A9',
        tabBarIndicatorStyle: {backgroundColor: '#EC8B00'},
        tabBarStyle: {
          backgroundColor: '#16171B',
        },
        tabBarLabelStyle: {
          textTransform: 'none',
          fontSize: 16,
        },
      }}>
      <Tab.Screen
        name="Login"
        options={{title: 'Todos os Filmes'}}
        component={AllMovies}
      />
      <Tab.Screen
        name="Login2"
        options={{title: 'Filmes Favoritos'}}
        component={FavoritMovies}
      />
    </Tab.Navigator>
  );
};

export {TopTabRoutes};
