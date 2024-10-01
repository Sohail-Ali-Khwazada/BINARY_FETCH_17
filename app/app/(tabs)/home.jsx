import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { router } from "expo-router";
import * as Location from "expo-location";
import {useGlobalContext} from './../../context/GlobalProvider';

const Home = () => {
  const [heartRate, setHeartRate] = useState(72); 
  const [steps, setSteps] = useState(1000); 
  const [sleep, setSleep] = useState("1 hrs");
  const [isStepActive, setIsStepActive] = useState(false); // Track if step counting is active
  const {user} = useGlobalContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHeartRate((prevHeartRate) => {
        const change = Math.random() < 0.5 ? 1 : -1; 
        return Math.max(40, prevHeartRate + change); 
      });

      if (isStepActive) {
        setSteps((prevSteps) => {
          // Increment steps by 10 if active
          return Math.max(0, prevSteps + 1); 
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [isStepActive]); // Depend on isStepActive

  const [activities, setActivities] = useState([]);
  const [location, setLocation] = useState(null);
  const emergencyContactNumber = "9136102120";

  const handleEmergencyAlert = () => {
    if (!location) {
      Alert.alert("Error", "Location not available.");
      return;
    }

    const message = `Emergency Alert! Please check on me. My location is: `;
    const googleMapsUrl = `https://www.google.com/maps/?q=${location.latitude},${location.longitude}`;
    const url = `sms:${emergencyContactNumber}?body=${encodeURIComponent(
      message
    )}%0A${encodeURIComponent(googleMapsUrl)}`;

    Linking.openURL(url).catch((err) => {
      console.error("Error sending message: ", err);
      Alert.alert("Error", "Could not send the message.");
    });
  };

  useEffect(() => {
    const requestLocationPermission = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Location permission denied.");
        return;
      }

      getCurrentLocation();
    };

    const getCurrentLocation = async () => {
      try {
        const { coords } = await Location.getCurrentPositionAsync({});
        setLocation({ latitude: coords.latitude, longitude: coords.longitude });
      } catch (error) {
        Alert.alert("Error", "Unable to retrieve location.");
        console.error(error);
      }
    };

    requestLocationPermission();

    const fetchActivities = async () => {
      try {
        const response = await fetch(
          "https://6nddmv2g-5000.inc1.devtunnels.ms/api/activities/get-activities"
        );
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error("Error fetching activities: ", error);
      }
    };

    fetchActivities();
  }, []);

  // Function to toggle step counting
  const toggleStepCounter = () => {
    setIsStepActive((prev) => !prev);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header Section */}
        <View className="p-6 flex-row justify-between items-center">
          <View>
            <Text className="text-2xl font-bold text-white">
              Good Morning, {user.fullName}
            </Text>
            <Text className="text-sm text-gray-200">{new Date().toLocaleDateString()}</Text>
          </View>
          <TouchableOpacity>
            <Image source={icons.settings} className="w-7 h-7 tint-white" />
          </TouchableOpacity>
        </View>

        {/* Health Metrics Overview */}
        <View className="flex-row justify-around p-6">
          {[ 
            {
              icon: icons.heartRate,
              label: "Heart Rate",
              value: `${heartRate} bpm`,
            },
            { icon: icons.sleep, label: "Sleep", value: sleep },
            { icon: icons.steps, label: "Steps", value: `${steps}` },
          ].map((metric, idx) => (
            <TouchableOpacity 
              onPress={metric.label === "Steps" ? toggleStepCounter : null}
              key={idx}
              className="items-center bg-secondary rounded-lg p-5 shadow-lg"
            >
              <Image source={metric.icon} className="w-10 h-10 tint-white" />
              <Text className="text-lg font-bold text-white mt-2">
                {metric.value}
              </Text>
              <Text className="text-xs text-gray-200">{metric.label}</Text>
              {metric.label === "Steps" && (
                ''
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* Upcoming Reminders */}
        <View className="p-5 bg-black-100 rounded-lg mx-6 shadow-sm">
          <Text className="text-white font-semibold text-lg">
            Upcoming Reminders
          </Text>
          <View className="mt-4">
            {activities.map((activity) => (
              <View
                key={activity._id}
                className="flex-row items-center bg-slate-600 p-4 rounded-lg mb-3 shadow-md"
              >
                {/* Colored Dot */}
                <View
                  className={`w-3 h-3 rounded-full mr-3 ${
                    activity.activityType === "medication"
                      ? "bg-blue-500"
                      : "bg-green-500"
                  }`}
                />
                {/* Activity Details */}
                <Text className="text-white text-base">
                  {activity.activityType === "medication"
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
            <Text className="text-white font-bold text-lg">
              🚨 Emergency Alert
            </Text>
          </TouchableOpacity>
          <Text className="text-gray-200 mt-2 text-center">
            Notify caregiver and family
          </Text>
        </View>

        {/* Quick Access Features */}
        <View className="flex-row justify-between px-6 mb-10">
          <TouchableOpacity className="bg-secondary-100 rounded-lg p-5 w-[48%] items-center shadow-sm">
            <Text className="text-white font-semibold">Health Tracking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="bg-secondary-100 rounded-lg p-5 w-[48%] items-center shadow-sm"
            onPress={() => router.push("/chat")}
          >
            <Text className="text-white font-semibold">Messages</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
