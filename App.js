import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicio from "./components/TelaInicio";
import TelaPerfil from "./components/TelaPerfil";
import Teladois from './components/Teladois';
import Telatres from './components/Telatres';
import Telaquato from './components/Telaquato';

const Stack = createStackNavigator();

export default function App () {
  return (
	<NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="TelaInicio"
        component = { TelaInicio }/>
        <Stack.Screen name="TelaPerfil" component = { TelaPerfil } />
        <Stack.Screen name="Teladois" component = { Teladois } />
        <Stack.Screen name="Telatres" component = { Telatres } />
        <Stack.Screen name="Telaquato" component = { Telaquato } />
      </Stack.Navigator>
  </NavigationContainer>
  )
};
