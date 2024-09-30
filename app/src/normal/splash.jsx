import React from "react";
import { Image, ScrollView, Text, View, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants"; // Make sure images is properly exported

export default function Splash() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#161622' }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ position: 'relative', width: '100%', height: '100%' }}>
          {/* Background Image with reduced opacity */}
          <Image
            source={images.landing} // Assuming images.landing is the background image
            style={{ position: 'absolute', width: '100%', height: '100%', opacity: 0.3 }}
            resizeMode="cover"
          />
          
          {/* Content overlay */}
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {/* App name text */}
            <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Wise_Care</Text>
          </View>
          
          {/* Sign In and Sign Up buttons at the bottom */}
          <View style={{ position: 'absolute', bottom: 40, width: '100%', paddingHorizontal: 16 }}>
            <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 16, borderRadius: 8, marginBottom: 8 }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#161622' }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 16, borderRadius: 8 }}>
              <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', color: '#161622' }}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
