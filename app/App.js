import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "./constants"; // assuming images is properly exported

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative w-full h-full">
          {/* Background Image with reduced opacity */}
          <Image
            source={images.landing} // Assuming images.landing is the background image
            className="absolute w-full h-full opacity-30"
            resizeMode="cover"
          />
          
          {/* Content overlay */}
          <View className="w-full h-full justify-center items-center">
            {/* App name text */}
            <Text className="text-4xl font-bold text-white">Wise_Care</Text>
          </View>
          
          {/* Signin and Signup buttons at the bottom */}
          <View className="absolute bottom-10 w-full px-4">
            <TouchableOpacity className="bg-white py-4 rounded-lg mb-4">
              <Text className="text-center text-lg font-semibold text-primary">Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-white py-4 rounded-lg">
              <Text className="text-center text-lg font-semibold text-primary">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
