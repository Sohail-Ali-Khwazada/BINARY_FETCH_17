import React, { useState } from "react";
import Chatbot from "../pages/Chatbot";

export function ChatBotImg() {
    const [isVisible, setIsVisible] = useState(false);
    setIsVisible

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="h-full w-full flex flex-col bg-transparent items-end justify-between">
            <button onClick={handleClick}>
                <img
                    src="https://img.freepik.com/free-vector/chatbot-chat-message-vectorart_78370-4104.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727654400&semt=ais_hybrid"
                    alt="Chatbot Icon"
                    className="fixed flex items-center justify-center backdrop-blur-lg z-50 h-12 w-12 m-3"
                />
            </button>
            {isVisible && <Chatbot />}
        </div>
    );
}
