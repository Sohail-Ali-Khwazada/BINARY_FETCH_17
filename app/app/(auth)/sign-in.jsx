import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { router } from 'expo-router';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    if (!email || !password) {
      Alert.alert('Please fill in all fields.');
      return;
    }
    console.log({ email, password });
    Alert.alert('Sign In Successful!');
  };

  return (
    <ScrollView className="bg-white p-4 pt-20 flex-1 ">
      <StatusBar style="dark" />
      <View className="flex-col items-center justify-center w-full">
        <Image source={icons.logo} className="w-32 h-32 mb-4" 
        resizeMode='contain' />
        <Text className="text-3xl font-bold text-center mb-8 text-blue-600">Sign In</Text>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-700 mb-2">Email</Text>
          <TextInput 
            className="border border-gray-300 p-3 rounded-lg shadow-md"
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-700 mb-2">Password</Text>
          <TextInput 
            className="border border-gray-300 p-3 rounded-lg shadow-md"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity 
          className="bg-blue-600 p-3 rounded-lg shadow-md w-full"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center font-semibold text-lg">Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4" onPress={()=>router.push('/sign-up')}>
          <Text className="text-center text-gray-600">
            Don't have an account?{' '}
            <Text className="text-blue-600 font-semibold">Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
