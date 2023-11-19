import React from 'react';
import {StatusBar} from 'react-native';
import { RootRoutes } from './routes/RootRoutes';


function App() {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor('#16171B');

  return (
    <RootRoutes/>
  );
}

export default App;
