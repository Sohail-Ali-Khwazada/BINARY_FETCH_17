import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, TextInput, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const Profile = () => {
  const [user, setUser] = useState("Ashish"); 
  const [email, setEmail] = useState("ashish@gmail.com"); 
  const [emergencyContactName, setEmergencyContactName] = useState("Uncle"); 
  const [emergencyContact, setEmergencyContact] = useState("9567895432"); 

  const handleSave = () => {
    // Log the values to console
    console.log("Profile Information Saved:");
    console.log("Full Name:", user);
    console.log("Email:", email);
    console.log("Emergency Contact Name:", emergencyContactName);
    console.log("Emergency Contact Number:", emergencyContact);
    
    // Optionally, you can show a success message
    Alert.alert("Profile Updated", "Your profile information has been saved successfully!");
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="p-4 flex-row justify-between items-center">
          <Text className="text-xl font-pbold text-white">Profile</Text>
          <TouchableOpacity>
            <Image source={icons.settings} className="w-6 h-6 tint-white" />
          </TouchableOpacity>
        </View>

        {/* Personal Information */}
        <View className="bg-black-100 p-4 rounded-lg mx-4 my-4">
          <Text className="text-secondary-100 font-psemibold text-lg mb-2">
            Personal Information
          </Text>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#CDCDE0"
            className="bg-black-200 text-white p-3 rounded-lg mb-2"
            value={user}
            onChangeText={setUser}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#CDCDE0"
            className="bg-black-200 text-white p-3 rounded-lg"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Emergency Contact */}
        <View className="bg-black-100 p-4 rounded-lg mx-4 my-4">
          <Text className="text-secondary-100 font-psemibold text-lg mb-2">
            Emergency Contact
          </Text>
          <TextInput
            placeholder="Emergency Contact Name"
            placeholderTextColor="#CDCDE0"
            className="bg-black-200 text-white p-3 rounded-lg mb-2"
            value={emergencyContactName}
            onChangeText={setEmergencyContactName}
          />
          <TextInput
            placeholder="Emergency Contact Number"
            placeholderTextColor="#CDCDE0"
            className="bg-black-200 text-white p-3 rounded-lg"
            value={emergencyContact}
            onChangeText={setEmergencyContact}
          />
        </View>

        {/* Edit and Save Buttons */}
        <View className="p-4 my-4 mx-4 flex-row justify-between">
          <TouchableOpacity 
            className="bg-red-600 rounded-full py-4 flex-1 mr-2 items-center shadow-lg"
            onPress={() => setIsEditable(true)}
          >
            <Text className="text-white font-pbold text-lg">Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            className="bg-green-500 rounded-full py-4 flex-1 ml-2 items-center shadow-lg"
            onPress={handleSave}
          >
            <Text className="text-white font-pbold text-lg">Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
