import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Linking, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants"; 
import { router } from "expo-router";

const Home = () => {
  const [activities, setActivities] = useState([]);
  const emergencyContactNumber = "9136102120"; 

  const handleEmergencyAlert = () => {
    const message = "Emergency Alert! Please check on me.";
    const url = `sms:${emergencyContactNumber}?body=${encodeURIComponent(message)}`;

    Linking.openURL(url)
      .catch((err) => {
        console.error("Error sending message: ", err);
        Alert.alert("Error", "Could not send the message.");
      });
  };

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch("https://6nddmv2g-5000.inc1.devtunnels.ms/api/activities/get-activities");
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities: ", error);
      }
    };

    fetchActivities();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        
        {/* Header Section */}
        <View className="p-6 flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold text-white">Good Morning, John</Text>
            <Text className="text-sm text-gray-200">September 30, 2024</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.settings} className="w-7 h-7 tint-white" />
          </TouchableOpacity>
        </View>

        {/* Health Metrics Overview */}
        <View className="flex-row justify-around p-6">
          {[
            { icon: icons.heartRate, label: "Heart Rate", value: "72 bpm" },
            { icon: icons.sleep, label: "Sleep", value: "6 hrs" },
            { icon: icons.steps, label: "Steps", value: "4,000" },
          ].map((metric, idx) => (
            <View key={idx} className="items-center bg-secondary rounded-lg p-5 shadow-lg">
              <Image source={metric.icon} className="w-10 h-10 tint-white" />
              <Text className="text-lg font-bold text-white mt-2">{metric.value}</Text>
              <Text className="text-xs text-gray-200">{metric.label}</Text>
            </View>
          ))}
        </View>

        {/* Upcoming Reminders */}
        <View className="p-5 bg-black-100 rounded-lg mx-6 shadow-sm">
          <Text className="text-white font-semibold text-lg">Upcoming Reminders</Text>
          <View className="mt-4">
            {activities.map(activity => (
              <View key={activity._id} className="bg-secondary-200 p-4 rounded-lg mb-3 shadow-md">
                <Text className="text-white text-base">
                  {activity.activityType === 'medication' 
                    ? `Medication Reminder: ${activity.time} - ${activity.activityName}` 
                    : `Appointment: ${activity.time} - ${activity.activityName}`}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Emergency Contact */}
        <View className="p-6 mx-6">
          <TouchableOpacity 
            className="bg-red-600 rounded-full py-5 items-center shadow-lg"
            onPress={handleEmergencyAlert}
          >
            <Text className="text-white font-bold text-lg">🚨 Emergency Alert</Text>
          </TouchableOpacity>
          <Text className="text-gray-200 mt-2 text-center">Notify caregiver and family</Text>
        </View>

        {/* Quick Access Features */}
        <View className="flex-row justify-between px-6 mb-10">
          <TouchableOpacity className="bg-secondary-100 rounded-lg p-5 w-[48%] items-center shadow-sm">
            <Text className="text-white font-semibold">Health Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-secondary-100 rounded-lg p-5 w-[48%] items-center shadow-sm" onPress={() => router.push("/chat")}>
            <Text className="text-white font-semibold">Messages</Text>
          </TouchableOpacity>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
