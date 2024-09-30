import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { icons } from "../../constants";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useGlobalContext } from "../../context/GlobalProvider";
import useSendMessage from "../../hooks/useSendMessage";
import useGetMessages from "../../hooks/useGetMessages";
import useListenMessages from "../../hooks/useListenMessages";


// Dummy profile image for all users
const dummyProfileImage = "https://avatar.iran.liara.run/public/14";

// // Sample messages for chat
// const dummyMessages = [
//   { id: 1, message: "Hi, how are you?", sender: "other" },
//   { id: 2, message: "I'm doing well, thank you!", sender: "self" },
//   { id: 3, message: "Don't forget to take your medication.", sender: "other" },
//   { id: 4, message: "Sure, I won't!", sender: "self" },
// ];

export default function ChatApp() {
  const { user,selectedConversation,setSelectedConversation} = useGlobalContext();
  // const [selectedUser, setSelectedUser] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [chats, setChats] = useState([]);
  const {loading,sendMessage} = useSendMessage();
  const {messages,setMessages} = useGetMessages();
  useListenMessages();


  useEffect(() => {
    // Fetch chats
    const fetchChats = async () => {
      //change the URL to raj's server
      const res = await fetch('https://snj4j090-5000.inc1.devtunnels.ms/api/user', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + user.token
        }
      });
      const data = await res.json();
      setChats(data);
    };
    fetchChats();
  }, [messages,setMessages]);

  

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!messageInput) return;
    console.log("messageInput",messageInput);
    await sendMessage(messageInput);
    setMessageInput("");
  }
  return (
    <SafeAreaView className="bg-gray-900 flex-1">
      <StatusBar style="light" />

      {selectedConversation === null ?(
        // User list view
        <ScrollView className="p-4 bg-gray-900">
          <Text className="text-white text-xl font-bold mb-4">Chats</Text>
          {chats.map((chat) => (
            <TouchableOpacity
              key={chat._id}
              className="flex-row items-center justify-between py-4 border-b border-gray-700"
              onPress={() => setSelectedConversation(chat)}
            >
              <View className="flex-row items-center">
                <Image
                  source={{ uri: dummyProfileImage }}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <View>
                  <Text className="text-white font-bold">
                    {chat.role === "careGiver" ? "Care_Taker" : chat.fullName}
                  </Text>
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
            <TouchableOpacity onPress={() => setSelectedConversation(null)} className="mr-4">
              <Image source={icons.leftArrow} resizeMode="contain" className="w-3 h-3" />
            </TouchableOpacity>

            {/* User Profile and Name */}
            <View className="flex-row items-center">
              <Image source={{ uri: dummyProfileImage }} className="w-10 h-10 rounded-full mr-4" />
              <Text className="text-white font-bold">{selectedConversation.fullName}</Text>
            </View>

            {/* Video Call Icon */}
            <TouchableOpacity className="ml-auto">
              <View><FontAwesome name="video-camera" size={24} color="white" /></View>
            </TouchableOpacity>
          </View>

          <ScrollView className="flex-1 p-4 bg-gray-900">
            {messages.map((msg) => (
              <View
                key={msg._id}
                className={`flex-row mb-4 ${
                  msg.senderId === user._id ? "justify-end" : "justify-start"
                }`}
              >
                <View
                  className={`max-w-xs p-3 rounded-lg ${
                    msg.senderId === user._id ? "bg-blue-500" : "bg-gray-700"
                  }`}
                >
                  <Text className="text-white">{msg.message}</Text>
                </View>
              </View>
            ))}
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
            <TouchableOpacity onPress={handleSubmit} className="ml-4">
              <Text className="text-blue-500">Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
}
