import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants"; // Assuming you have these icons in your project
import { router } from "expo-router";

const Home = () => {
  const emergencyContactNumber = "9136102120"; 
  const handleEmergencyAlert = () => {
  
    const message = "Emergency Alert! Please check on me.";
    
    // Create the SMS URL
    const url = `sms:${emergencyContactNumber}?body=${encodeURIComponent(message)}`;

    // Use Linking to open the SMS app
    Linking.openURL(url)
      .catch((err) => {
        console.error("Error sending message: ", err);
        Alert.alert("Error", "Could not send the message.");
      });
  };
  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Header Section */}
        <View className="p-4 flex-row justify-between items-center">
          <View>
            <Text className="text-xl font-pbold text-white">Good Morning, John</Text>
            <Text className="text-sm text-gray-100">September 30, 2024</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.settings} className="w-6 h-6 tint-white" />
          </TouchableOpacity>
        </View>

        {/* Health Metrics Overview */}
        <View className="flex-row justify-around p-4">
          <View className="items-center bg-secondary rounded-lg p-4">
            <Image source={icons.heartRate} className="w-8 h-8 tint-white" />
            <Text className="text-lg font-pbold text-white mt-2">72 bpm</Text>
            <Text className="text-xs text-gray-100">Heart Rate</Text>
          </View>
          <View className="items-center bg-secondary rounded-lg p-4">
            <Image source={icons.sleep} className="w-8 h-8 tint-white" />
            <Text className="text-lg font-pbold text-white mt-2">6 hrs</Text>
            <Text className="text-xs text-gray-100">Sleep</Text>
          </View>
          <View className="items-center bg-secondary rounded-lg p-4">
            <Image source={icons.steps} className="w-8 h-8 tint-white" />
            <Text className="text-lg font-pbold text-white mt-2">4,000</Text>
            <Text className="text-xs text-gray-100">Steps</Text>
          </View>
        </View>

        {/* Upcoming Reminders */}
        <View className="p-4 bg-black-100 rounded-lg my-4 mx-4">
          <Text className="text-white font-psemibold text-lg">Upcoming Reminders</Text>
          <View className="mt-2">
            <View className="flex-row justify-between items-center py-2">
              <Text className="text-white">8:00 AM - Medication</Text>
              <Text className="text-gray-100">Pending</Text>
            </View>
            <View className="flex-row justify-between items-center py-2">
              <Text className="text-white">12:00 PM - Doctor Appointment</Text>
              <Text className="text-gray-100">Pending</Text>
            </View>
          </View>
        </View>

        {/* Emergency Contact */}
        <View className="p-4 my-4 mx-4">
          <TouchableOpacity 
          className="bg-red-500 rounded-full py-4 items-center shadow-lg"
          onPress={handleEmergencyAlert}
          >
            <Text className="text-white font-pbold text-lg">Emergency Alert</Text>
          </TouchableOpacity>
          <Text className="text-gray-100 mt-2 text-center">Notify caregiver and family</Text>
        </View>

        {/* Quick Access Features */}
        <View className="flex-row justify-between p-4">
          <TouchableOpacity className="bg-secondary-100 rounded-lg p-4 w-[48%]">
            <Text className="text-white font-psemibold">Health Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary-100 rounded-lg p-4 w-[48%]" onPress={()=>router.push("/chat")}>
            <Text className="text-white font-psemibold ml-6">Messages</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
