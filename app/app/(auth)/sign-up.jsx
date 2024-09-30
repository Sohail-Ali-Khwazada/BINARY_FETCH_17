import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { router } from 'expo-router';
import { useGlobalContext } from './../../context/GlobalProvider';


export default function SignUp() {
  const { setUser } = useGlobalContext(); 
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    if (!fullName || !email || !password) {
      Alert.alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('https://6nddmv2g-5000.inc1.devtunnels.ms/api/auth/signup', { 
        fullName, 
        email, 
        password 
      });

      const res=await fetch('https://6nddmv2g-5000.inc1.devtunnels.ms/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });
      const data =await res.json();
      
      console.log(data);
      // Alert.alert('Word');

    } catch (err) {
      console.error(err); // Log the error for debugging
      Alert.alert('Sign Up Failed!', err.message || 'Please try again later.');
    }
  };

  return (
    <ScrollView className="bg-white p-4 pt-20 flex-1">
      <StatusBar style="dark" />
      <View className="flex-col items-center justify-center w-full">
        <Image source={icons.logo} className="w-32 h-32 mb-4" resizeMode='contain' />
        <Text className="text-3xl font-bold text-center mb-8 text-blue-600">Create Account</Text>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-700 mb-2">Full Name</Text>
          <TextInput 
            className="border border-gray-300 p-3 rounded-lg shadow-md"
            placeholder="Enter your full name"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
        
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
          onPress={handleSignUp}
        >
          <Text className="text-white text-center font-semibold text-lg">Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity className="mt-4" onPress={() => router.push('/sign-in')}>
          <Text className="text-center text-gray-600">
            Already have an account?{' '}
            <Text className="text-blue-600 font-semibold">Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}