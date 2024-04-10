
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './src/views/dashboard';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="DashBoard">
        <Stack.Screen name="DashBoard" component={DashBoard} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


