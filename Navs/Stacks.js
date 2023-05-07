import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../StacksFiles/Login';
import SingUp from '../StacksFiles/SingUp';
import Tabs from './Tabs';
import HomeLogin from '../StacksFiles/HomeLogin';


const Stack = createNativeStackNavigator();

const Stacks = (props) => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="HomeLogin" options={{ headerShown: false}} component={HomeLogin} />
    <Stack.Screen name="Login"  options={{ headerShown: false}} component={Login} />
    <Stack.Screen name="SingUp"  options={{ headerShown: false}} component={SingUp} />
    <Stack.Screen name="Home" component={Tabs} />
  </Stack.Navigator>
  </NavigationContainer>
  );
}

export default Stacks;
