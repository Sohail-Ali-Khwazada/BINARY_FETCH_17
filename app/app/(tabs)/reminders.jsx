import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Reminders = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
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

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reminders;
