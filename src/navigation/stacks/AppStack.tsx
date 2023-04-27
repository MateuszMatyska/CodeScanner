import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from '../const/ScreensNames';
import LoginScreen from '../../screens/loginScreen/LoginScreen';
import CameraScreen from '../../screens/cameraScreen/CameraScreen';
import ResultScreen from '../../screens/resultScreen/ResultScreen';
import MenuScreen from '../../screens/menuScreen/MenuScreen';

const Stack = createNativeStackNavigator();

const AppStack: React.FC = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
    <Stack.Screen name={ScreenNames.Menu} component={MenuScreen} />
    <Stack.Screen name={ScreenNames.Camera} component={CameraScreen} />
    <Stack.Screen name={ScreenNames.Result} component={ResultScreen} />
  </Stack.Navigator>
);

export default AppStack;
