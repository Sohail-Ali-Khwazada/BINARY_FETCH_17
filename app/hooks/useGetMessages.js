import { useEffect, useState } from "react"
// import useConversation from "../zustand/useConversation";
// import useToken from "../zustand/useToken";
import { useGlobalContext } from "../context/GlobalProvider";
import { Alert } from "react-native";


function useGetMessages() {
 
  const [loading,setLoading] = useState(false);
  // const {messages,setMessages,selectedConversation}= useConversation();
  const {user,messages,setMessages,selectedConversation} = useGlobalContext();
  const authToken = user.token;

  useEffect(() => {
    const getMessages = async() => {
      setLoading(true);
      try {
        // const res = await fetch(`http://localhost:5000/api/messages/${selectedConversation._id}`,{
        //   method: "GET",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": `Bearer ${authToken}`
        //   }
        // });
        const res = await fetch(`https://snj4j090-5000.inc1.devtunnels.ms/api/messages/${selectedConversation?._id}`,{
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`
          }
        });
        const data = await res.json();
        if(data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        Alert.alert(error.message);
      } finally {
        setLoading(false);
      }
    }
    if(selectedConversation?._id) getMessages();
  },[selectedConversation?._id])
  return {messages,loading};
}

export default useGetMessages