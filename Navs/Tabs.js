import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../TabsFiles/Home';
import User from '../TabsFiles/User';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    
    <NavigationContainer independent={true}>
        
    <Tab.Navigator
     tabBarOptions={{
        activeTintColor: 'yellow',
        inactiveTintColor: 'white',
      }}>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarIcon: ({focused, size }) => (
          <Ionicons 
          name={focused ? 'home-outline' : 'home-outline'}
          size={size} 
          color={focused ? 'yellow' : 'white'} />
        ),
      }}/>
      <Tab.Screen 
      name="User" 
      component={User} 
      options={{
        tabBarIcon: ({focused, size }) => (
          <Ionicons 
          name={focused ? 'person-outline' : 'person-outline'}
          size={size} 
          color={focused ? 'yellow' : 'white'} 
          />
        ),
      }}/>
    </Tab.Navigator>

  </NavigationContainer>
  );
}

export default Tabs;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    color_icon:{
        color: 'white'
    }
  });
  