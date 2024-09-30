import { View, Text } from 'react-native';
import { Tabs } from "expo-router";
import FontAwesome from 'react-native-vector-icons/FontAwesome'; // Importing FontAwesome icons

const TabIcon = ({iconName, color, name, focused}) => {
  return (
    <View className="items-center justify-center gap-2">
      <View><FontAwesome name={iconName} size={24} color={color} /></View>
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`} style={{ color: color }}>
        {name}
      </Text>
    </View>
  );
}

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF9C01", // Primary secondary color
        tabBarInactiveTintColor: "#CDCDE0", // Light gray from your theme
        tabBarStyle: {
          backgroundColor: "#161622", // Primary background color from your theme
          borderTopWidth: 1,
          borderTopColor: "#232533", // Dark border color
          height: 84,
        }
      }}>
        {/* Home Tab */}
        <Tabs.Screen 
          name="home" 
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                iconName="home" // Home icon from FontAwesome
                color={color}
                name="Home"
                focused={focused}
              />
            )
          }}
        />

        {/* Reminders Tab */}
        <Tabs.Screen 
          name="chat" 
          options={{
            title: "Reminders",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                iconName="bell" // Bell icon from FontAwesome
                color={color}
                name="Reminders"
                focused={focused}
              />
            )
          }}
        />

        {/* Emergency Alert Tab */}
        <Tabs.Screen 
          name="emergency" 
          options={{
            title: "Emergency",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                iconName="exclamation-circle" // Emergency alert icon from FontAwesome
                color={color}
                name="Alert"
                focused={focused}
              />
            )
          }}
        />

        {/* Video Calls Tab */}
        <Tabs.Screen 
          name="video" 
          options={{
            title: "Video",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                iconName="video-camera" // Video camera icon from FontAwesome
                color={color}
                name="Video"
                focused={focused}
              />
            )
          }}
        />

        {/* Profile Tab */}
        <Tabs.Screen 
          name="profile" 
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon 
                iconName="user" // User icon from FontAwesome
                color={color}
                name="Profile"
                focused={focused}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
}

export default TabsLayout;
