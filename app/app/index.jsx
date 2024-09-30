import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants"; // Ensure images is properly exported
import { router } from "expo-router";

export default function App() {

  return (
    <SafeAreaView className="flex-1 bg-[#0f0f1f]">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="relative w-full h-full">
          {/* Slightly more visible background image */}
          <Image
            source={images.landing} // Assuming images.landing is the background image
            style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.2 }}
            resizeMode="cover"
          />
          
          {/* Content overlay */}
          <View className="flex-1 justify-center items-center">
            {/* App name text with improved font and style */}
            <Text className="text-6xl font-bold text-white tracking-wide">
              WiseCare
            </Text>
          </View>
          
          {/* Sign In and Sign Up buttons at the bottom */}
          <View className="absolute bottom-10 w-full px-4">
            <TouchableOpacity 
            className="bg-[#3b3b4f] py-4 rounded-full mb-4 shadow-lg"
            onPress={() => router.push("/sign-in")}
            >
              <Text className="text-center text-lg font-psemibold text-white">
                Sign In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            className="bg-[#5c5cb0] py-4 rounded-full shadow-lg"
            onPress={() => router.push("/sign-up")}
            >
              <Text className="text-center text-lg font-psemibold text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}


