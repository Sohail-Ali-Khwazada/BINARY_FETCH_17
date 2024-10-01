import React, { useState } from "react";
import {View,Text,Image,TouchableOpacity,ScrollView,TextInput} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Dummy profile image for all users
const dummyProfileImage = "https://avatar.iran.liara.run/public/14";

// Sample chat data
const chats = [
  { id: 1, name: "Dr. Kamalesh", message: "Hello" },
  { id: 2, name: "Dr. Kavita", message: "How are you?" },
  { id: 3, name: "Dr. Raj", message: "Let's meet tomorrow" },
  { id: 4, name: "Dr. Sara", message: "See you soon!" },
];

export default function ChatApp() {
  // State to track selected user for chat
  const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");

  // Handle sending message
  const handleSendMessage = () => {
    console.log(`Sending message: ${messageInput}`);
    // Implement message send logic here
    setMessageInput("");
  };

  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <StatusBar style="light" />

      {selectedUser === null ? (
        // User list view
        <ScrollView className="p-4 bg-gray-900">
          <Text className="text-white text-xl font-bold mb-4">Chats</Text>
          {chats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              className="flex-row items-center justify-between py-4 border-b border-gray-700"
              onPress={() => setSelectedUser(chat)}
            >
              <View className="flex-row items-center">
                <Image
                  source={{ uri: dummyProfileImage }}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <View>
                  <Text className="text-white font-bold">{chat.name}</Text>
                  <Text className="text-gray-400">{chat.message}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        // Chat screen view when a user is selected
        <View className="flex-1 bg-gray-900">
          <View className="flex-row items-center p-4 bg-gray-800">
            {/* Back Button */}
            <TouchableOpacity
              onPress={() => setSelectedUser(null)}
              className="mr-4"
            >
              
              <Image
                source={icons.leftArrow}
                resizeMode="contain"
                className="w-3 h-3"
              />
            </TouchableOpacity>

            {/* User Profile and Name */}
            <View className="flex-row items-center">
              <Image
                source={{ uri: dummyProfileImage }}
                className="w-10 h-10 rounded-full mr-4"
              />
              <Text className="text-white font-pextrabold">{selectedUser.name}</Text>
            </View>

            {/* Video Call Icon */}
            <TouchableOpacity className="ml-auto">
            <View><FontAwesome name="video-camera" size={24} color="white"/></View>
            </TouchableOpacity>
          </View>

          <ScrollView className="flex-1 p-4 bg-gray-900">
            <Text className="text-gray-400 text-center mb-4">
              Chat messages go here
            </Text>
            {/* Implement chat messages display here */}
          </ScrollView>

          {/* Input field for sending messages */}
          <View className="flex-row items-center border-t border-gray-700 p-4 bg-gray-800">
            <TextInput
              value={messageInput}
              onChangeText={setMessageInput}
              placeholder="Type a message"
              placeholderTextColor="#888"
              className="flex-1 bg-gray-700 text-white p-2 rounded-full"
            />
            <TouchableOpacity onPress={handleSendMessage} className="ml-4">
              <Text className="text-blue-500">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
