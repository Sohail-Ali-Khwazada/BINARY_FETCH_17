import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setError(''); // Reset any previous error

    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBwktxidY9BJShSCwZqT6ObjuKEnz1_3gE',
        {
          contents: [{ parts: [{ text: input }] }],
        },
        { headers: { 'Content-Type': 'application/json' } }
      );

      const botMessage = {
        text: response.data.candidates[0].content.parts[0].text,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching data from API', error);
      setError('Failed to fetch response. Please try again later.'); // Set error message
    }

    setInput('');
  };

  return (
    <div className="max-w-md mx-auto p-5 border border-gray-300 rounded-lg shadow-md bg-white m-5">
      <div className="h-96 overflow-y-scroll border border-gray-200 rounded-lg p-4 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className={`my-2 p-2 rounded-lg ${msg.sender === 'bot' ? 'bg-red-100 text-left' : 'bg-blue-100 text-right'}`}>
            <strong>{msg.sender === 'bot' ? 'Bot' : 'You'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      {error && <div className="text-red-500 mb-2">{error}</div>} {/* Error message display */}
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-lg"
          placeholder="Type your message..."
        />
        <button type="submit" className="bg-blue-500 text-white rounded-r-lg px-4 hover:bg-blue-600 transition">
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
