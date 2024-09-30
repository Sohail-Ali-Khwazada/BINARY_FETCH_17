import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen1Icon from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato', // Set your active icon color
        tabBarInactiveTintColor: 'gray', // Set your inactive icon color
      }}
    >
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Screen1Icon name="500px" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Screen1Icon name="500px-with-circle" size={25} color={tabInfo.color} />
          ),
        }}
      />
      <Tab.Screen
        name="Screen3"
        component={Screen3}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => (
            <Screen1Icon name="add-to-list" size={25} color={tabInfo.color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
