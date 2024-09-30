import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import { registerRootComponent } from 'expo';


export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <AppNavigator />
    </View>
  );
}

registerRootComponent(App);