import { View, Text } from "react-native";
import React, { useEffect } from "react";

const Screen1 = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://192.168.0.108:3000/");
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.text();
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []); // Empty dependency array to run once on mount

  return (
    <View>
      <Text>Screen1</Text>
    </View>
  );
};

export default Screen1;
