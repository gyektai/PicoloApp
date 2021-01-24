import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider as PlayerProvider } from './src/context/PlayerContext';
import { Provider as DeckProvider } from './src/context/DeckContext';

import HomeScreen from './src/screens/HomeScreen';
import SelectorScreen from './src/screens/SelectorScreen';
import GameScreen from './src/screens/GameScreen';
import ConfigScreen from './src/screens/ConfigScreen';

import { useFonts, GochiHand_400Regular as gochi } from '@expo-google-fonts/gochi-hand';
import GlobalFont from 'react-native-global-font';

const Stack = createStackNavigator();





export default () => {

  let [fontsLoaded] = useFonts({
    gochi,
  });
  if(!fontsLoaded){
    return <Text>Loading</Text>;
  }
  const fontName = 'gochi';
  GlobalFont.applyGlobal(fontName);
  
  return (
    <PlayerProvider>
      <DeckProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode={false}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Selector" component={SelectorScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Config" component={ConfigScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </DeckProvider>
    </PlayerProvider>
  );
};