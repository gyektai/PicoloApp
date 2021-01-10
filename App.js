import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from './src/context/PlayerContext';
import HomeScreen from './src/screens/HomeScreen';
import SelectorScreen from './src/screens/SelectorScreen';
import GameScreen from './src/screens/GameScreen';

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode={false}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Selector" component={SelectorScreen} />
          <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};