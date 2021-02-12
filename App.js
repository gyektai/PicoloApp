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
import BackgroundTest from './src/screens/BackgroundTest';

// import { useFonts, GochiHand_400Regular as gochi } from '@expo-google-fonts/gochi-hand';
import { useFonts, Raleway_500Medium as raleway, Raleway_700Bold as ralewayBold } from '@expo-google-fonts/raleway';

import GlobalFont from 'react-native-global-font';

const Stack = createStackNavigator();





export default () => {

  let [fontsLoaded] = useFonts({
    raleway,
    ralewayBold
  });
  if(!fontsLoaded){
    return <Text>Loading</Text>;
  }
  {/* to apply a font globally

  const fontName = 'gochi';
  GlobalFont.applyGlobal(fontName);
  
  */}
  
  return (
    <PlayerProvider>
      <DeckProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode={false}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Selector" component={SelectorScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
            <Stack.Screen name="Config" component={ConfigScreen} />
            <Stack.Screen name="bg" component={BackgroundTest} />
          </Stack.Navigator>
        </NavigationContainer>
      </DeckProvider>
    </PlayerProvider>
  );
};