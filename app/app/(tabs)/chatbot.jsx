import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, Alert } from 'react-native';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!input.trim()) return; // Prevent sending empty messages

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setError('');

    try {
      const response = await fetch(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyBwktxidY9BJShSCwZqT6ObjuKEnz1_3gE',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: input }] }],
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();
      const botMessage = {
        text: data.candidates[0].content.parts[0].text,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching data from API', error);
      setError('Failed to fetch response. Please try again later.');
      Alert.alert('Error', 'Failed to fetch response. Please try again later.');
    }

    setInput('');
  };

  return (
    <View className="flex-1 py-7 bg-primary px-2">
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View
            className={`my-2 p-2 rounded-lg ${
              item.sender === 'bot' ? 'bg-red-100 self-start' : 'bg-blue-100 self-end'
            }`}
          >
            <Text className="font-bold">
              {item.sender === 'bot' ? 'Bot' : 'You'}:
            </Text>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        className="flex-1 mb-4"
      />
      {error ? <Text className="text-red-500 mb-2">{error}</Text> : null}
      <View className="flex-row items-center">
        <TextInput
          className="flex-1 border border-gray-300 rounded-l-lg p-2 text-white"
          value={input}
          onChangeText={setInput}
          placeholder="Type your message..."
          onSubmitEditing={handleSubmit}
        />
        <Button title="Send" onPress={handleSubmit}/>
      </View>
    </View>
  );
};

export default Chatbot;
