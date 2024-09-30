import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BottomNavigator from '../bottom/BottomNavigator';

const Main = () => {
  return (
    <BottomNavigator/>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Main