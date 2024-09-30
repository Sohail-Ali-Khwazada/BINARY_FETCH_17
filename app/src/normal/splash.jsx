import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
    return () => clearTimeout(timer); // Clear timer on unmount
  }, []);

  return (
    <View tyle={{ flex:1, justifyContent: "center", alignItems: "center"}}>
      <Text>Splash</Text>
    </View>
  );
};


export default Splash;
