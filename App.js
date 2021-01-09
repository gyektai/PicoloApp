import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import SelectorScreen from './src/screens/SelectorScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={false}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Selector" component={SelectorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};