import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext"
// import useConversation from "../zustand/useConversation";
import { useGlobalContext } from "../context/GlobalProvider";


function useListenMessages() {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useGlobalContext();

  useEffect(() => {
    socket?.on("newMessage",(newMessage)=> {
      console.log("newMessage said by ashish",newMessage);
      setMessages([...messages,newMessage]);
    })
    return () => socket?.off("newMessage");
  },[socket,setMessages,messages]);
}

export default useListenMessages