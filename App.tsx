import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './src/navigation/services/NavigationService';
import AppStack from './src/navigation/stacks/AppStack';

function App(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}

export default App;
