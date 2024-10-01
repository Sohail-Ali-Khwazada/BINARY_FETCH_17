import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAuthContext } from "./AuthContext";

export const SocketContext = createContext({});

export const SocketContextProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authUser) {
      const socketInstance = io("https://snj4j090-5000.inc1.devtunnels.ms", {
        query: {
          userId: authUser?._id,
        },
      });
      setSocket(socketInstance);

      // socket.on('getOnlineUsers',(res)=>{
      //   console.log(res)
      //   setOnlineUsers(res)
      // })
      socketInstance.on("alertForall", (msg) => {
        alert("Alert : Heart rate is Inconsitent. Please consult a doctor.");
      });
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
};
