import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from '../Screens/Product/HomeScreen';
import CartScreen from '../Screens/Cart/CartScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="homeScreen" component={HomeScreen} />
        <Stack.Screen name="cartScreen" component={CartScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
