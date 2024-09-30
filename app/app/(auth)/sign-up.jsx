import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { router } from 'expo-router';
import { useGlobalContext } from './../../context/GlobalProvider';

export default function SignUp() {
  const { setUser } = useGlobalContext(); // Context to manage user state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Please fill in all fields.');
      return;
    }
    
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        setUser(data); 
        router.push('/home'); 
      } else {
        throw new Error(data.message || 'Sign Up Failed');
      }
      
    } catch (err) {
      console.error(err); // Log the error for debugging
      Alert.alert('Sign Up Failed!', err.message || 'Please try again later.');
    }
  };

  return (
    <ScrollView className="flex-1 bg-primary p-4 pt-20">
      <StatusBar style="light" />
      <View className="flex-col items-center justify-center w-full">
        <Image source={icons.logo} className="w-32 h-32 mb-4" resizeMode='contain' />
        <Text className="text-3xl font-bold text-center mb-8 text-secondary-100">Create Account</Text>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-200 mb-2">Full Name</Text>
          <TextInput 
            className="border border-gray-300 bg-black-200 text-white p-3 rounded-lg shadow-md"
            placeholder="Enter your full name"
            placeholderTextColor="#CDCDE0"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-200 mb-2">Email</Text>
          <TextInput 
            className="border border-gray-300 bg-black-200 text-white p-3 rounded-lg shadow-md"
            placeholder="Enter your email"
            keyboardType="email-address"
            placeholderTextColor="#CDCDE0"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-200 mb-2">Password</Text>
          <TextInput 
            className="border border-gray-300 bg-black-200 text-white p-3 rounded-lg shadow-md"
            placeholder="Enter your password"
            secureTextEntry
            placeholderTextColor="#CDCDE0"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity 
          className="bg-secondary-100 p-3 rounded-lg shadow-md w-full"
          onPress={handleSignUp}
        >
          <Text className="text-white text-center font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4" onPress={() => router.push('/sign-in')}>
          <Text className="text-center text-gray-300">
            Already have an account?{' '}
            <Text className="text-secondary-100 font-semibold">Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
