import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";

const SignIn = () => {
  return (
    <View>
      <TouchableOpacity
        className="bg-[#5c5cb0] py-4 rounded-full shadow-lg my-12"
        onPress={() => router.push("/home")}
      >
        <Text className="text-center text-lg font-psemibold text-white">
          home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
