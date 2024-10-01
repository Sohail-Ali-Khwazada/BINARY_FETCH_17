import { createContext, useContext, useEffect, useState } from "react";
import { useGlobalContext } from "./GlobalProvider";
import io from "socket.io-client"; // Ensure you have socket.io-client installed for React Native
import { Alert } from "react-native";

export const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext);
}

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useGlobalContext();

  useEffect(() => {
    if (user) {
      // Establish connection with the server
      const socketInstance = io("https://snj4j090-5000.inc1.devtunnels.ms", {
        query: {
          userId: user._id,
        },
        transports: ['websocket'],  // Ensures the WebSocket transport is used for React Native
      });

      setSocket(socketInstance);

      // Listen for online users from the server
      socketInstance.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      socketInstance.on("alertForall", (msg) => {
        Alert.alert("Alert : Heart rate is Inconsitent. Please consult a doctor.");
      });

      // Clean up the socket connection when the component unmounts or the user logs out
      return () => socketInstance.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
