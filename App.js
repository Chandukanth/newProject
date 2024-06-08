
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashBoard from './src/views/dashboard';
import LoadingScreen from './src/views/loadingScreen';
import DetailsScreen from './src/views/details';
import CartScreen from './src/views/cartscreen';
import AddressForm from './src/views/address/address';
import OrderScreen from './src/views/orderScreen';
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
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />
        <Stack.Screen name="AddressForm" component={AddressForm} />
        <Stack.Screen name="OrderScreen" component={OrderScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}


