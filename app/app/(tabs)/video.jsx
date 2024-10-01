import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";
import axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";

const WebinarComponent = () => {
  const [webinars, setWebinars] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://6nddmv2g-5000.inc1.devtunnels.ms/api/webinars/get-webinars"
        );
        setWebinars(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView className="flex-1 px-6 bg-primary">
        <Text className="text-3xl font-bold text-center mb-6 text-white">
          Upcoming Webinars
        </Text>
        {webinars.map((webinar, index) => (
          <View
            key={index}
            className="bg-secondary rounded-lg p-5 mb-6 shadow-lg border border-gray-300 transition-transform duration-300 hover:scale-105"
          >
            <Text className="text-xl font-semibold mb-2 text-white">
              {webinar.title}
            </Text>
            <Text className="text-gray-300 mb-2">{webinar.description}</Text>
            <Text className="text-slate-800 mb-1">{`Date: ${new Date(
              webinar.date
            ).toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}`}</Text>
            <Text className="text-slate-800 mb-4">{`Time: ${webinar.time}`}</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL(webinar.meetLink)}
              className="bg-green-600 text-white text-center py-2 rounded-md shadow-md hover:bg-green-700 transition duration-200"
            >
              <Text className="font-semibold text-center">Join Video Call</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WebinarComponent;
