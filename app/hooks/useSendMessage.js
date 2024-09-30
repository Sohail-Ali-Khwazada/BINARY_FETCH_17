import { useState } from "react";
import { useGlobalContext } from "../context/GlobalProvider";
import { Alert } from "react-native"; // For error handling

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation,user } = useGlobalContext();
  // const { authToken } = useToken();
  const authToken = user.token;

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      // Adjust the URL based on the environment (development/production)
      //change the URL to raj's server
      console.log("selected",selectedConversation);
      const res = await fetch(`https://snj4j090-5000.inc1.devtunnels.ms/api/messages/send/${selectedConversation?._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`,
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      
      if (data.error) {
        console.log("Error in sending message: ", data.error);
        throw new Error(data.error);
      }

      // Update messages state
      setMessages([...messages, data]);

    } catch (error) {
      // Use Alert for error handling
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
}

export default useSendMessage;
