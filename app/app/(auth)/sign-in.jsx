import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ScrollView, Alert, Image, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { icons } from '../../constants';
import { router } from 'expo-router';
import { useGlobalContext } from './../../context/GlobalProvider';

// Text translations for English, Hindi, Marathi, Malayalam, and Tamil
const translations = {
  en: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password',
    dontHaveAccount: "Don't have an account?",
    signUp: 'Sign Up',
    signInFailed: 'Sign In Failed!',
    fillFields: 'Please fill in all fields.',
    selectLanguage: 'Select Language',
  },
  hi: {
    signIn: 'साइन इन करें',
    email: 'ईमेल',
    password: 'पासवर्ड',
    enterEmail: 'अपना ईमेल दर्ज करें',
    enterPassword: 'अपना पासवर्ड दर्ज करें',
    dontHaveAccount: 'क्या आपके पास खाता नहीं है?',
    signUp: 'साइन अप करें',
    signInFailed: 'साइन इन विफल!',
    fillFields: 'कृपया सभी फ़ील्ड भरें।',
    selectLanguage: 'भाषा चुनें',
  },
  mr: {
    signIn: 'साइन इन करा',
    email: 'ईमेल',
    password: 'पासवर्ड',
    enterEmail: 'आपला ईमेल प्रविष्ट करा',
    enterPassword: 'आपला पासवर्ड प्रविष्ट करा',
    dontHaveAccount: 'तुमच्याकडे खाते नाही का?',
    signUp: 'साइन अप करा',
    signInFailed: 'साइन इन अयशस्वी!',
    fillFields: 'कृपया सर्व फील्ड भराव्यात.',
    selectLanguage: 'भाषा निवडा',
  },
  ml: {
    signIn: 'സൈൻ ഇൻ ചെയ്യുക',
    email: 'ഇമെയിൽ',
    password: 'പാസ്‌വേഡ്',
    enterEmail: 'നിങ്ങളുടെ ഇമെയിൽ നൽകുക',
    enterPassword: 'നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക',
    dontHaveAccount: 'നിങ്ങൾക്കൊരു അക്കൗണ്ട് ഇല്ലേ?',
    signUp: 'സൈൻ അപ് ചെയ്യുക',
    signInFailed: 'സൈൻ ഇൻ പരാജയപ്പെട്ടു!',
    fillFields: 'ദയവായി എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക.',
    selectLanguage: 'ഭാഷ തിരഞ്ഞെടുക്കുക',
  },
  ta: {
    signIn: 'உள்நுழைவு',
    email: 'மின்னஞ்சல்',
    password: 'கடவுச்சொல்',
    enterEmail: 'உங்கள் மின்னஞ்சலை உள்ளிடவும்',
    enterPassword: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
    dontHaveAccount: 'உங்களிடம் கணக்கு இல்லையா?',
    signUp: 'பதிவு செய்யவும்',
    signInFailed: 'உள்நுழைவு தோல்வி!',
    fillFields: 'அனைத்து பகுதிகளையும் பூர்த்தி செய்யவும்.',
    selectLanguage: 'மொழியைத் தேர்ந்தெடுக்கவும்',
  }
};

export default function SignIn() {
  const { setUser } = useGlobalContext(); // Context to manage user state

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('en'); // State for managing language
  const [modalVisible, setModalVisible] = useState(false); // Modal state

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert(translations[language].fillFields);
      return;
    }
    try {
      const response = await fetch('https://6nddmv2g-5000.inc1.devtunnels.ms/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data); 
        router.push('/home'); 
      } else {
        throw new Error(data.message || translations[language].signInFailed);
      }
      
    } catch (err) {
      console.error(err); // Log the error for debugging
      Alert.alert(translations[language].signInFailed, err.message || 'Please try again later.');
    }
  };

  return (
    <ScrollView className="flex-1 bg-primary p-4 pt-20">
      <StatusBar style="light" />
      <View className="flex-col items-center justify-center w-full">
        <Image source={icons.logo} className="w-32 h-32 mb-4" resizeMode='contain' />
        <Text className="text-3xl font-bold text-center mb-8 text-secondary-100">
          {translations[language].signIn}
        </Text>

        {/* Language Selection Modal Trigger */}
        <TouchableOpacity 
          className="bg-slate-700 p-3 rounded-lg shadow-md w-full mb-4"
          onPress={() => setModalVisible(true)}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {translations[language].selectLanguage}
          </Text>
        </TouchableOpacity>

        {/* Language Selection Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
            <View className="bg-white p-5 rounded-lg w-3/4">
              <Text className="text-lg font-bold text-center mb-4">Select Language</Text>

              <TouchableOpacity onPress={() => { setLanguage('en'); setModalVisible(false); }}>
                <Text className="text-center text-lg mb-2">English</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setLanguage('hi'); setModalVisible(false); }}>
                <Text className="text-center text-lg mb-2">हिन्दी</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setLanguage('mr'); setModalVisible(false); }}>
                <Text className="text-center text-lg mb-2">मराठी</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setLanguage('ml'); setModalVisible(false); }}>
                <Text className="text-center text-lg mb-2">മലയാളം</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { setLanguage('ta'); setModalVisible(false); }}>
                <Text className="text-center text-lg mb-2">தமிழ்</Text>
              </TouchableOpacity>

              {/* Close Button */}
              <TouchableOpacity 
                className="bg-red-500 p-3 rounded-lg mt-4"
                onPress={() => setModalVisible(false)}
              >
                <Text className="text-white text-center">Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Input Fields */}
        <View className="mb-4 w-full">
          <Text className="text-gray-300 mb-2">{translations[language].email}</Text>
          <TextInput 
            className="border border-gray-600 bg-black-200 text-white p-3 rounded-lg shadow-md"
            placeholder={translations[language].enterEmail}
            keyboardType="email-address"
            placeholderTextColor="#CDCDE0"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View className="mb-4 w-full">
          <Text className="text-gray-300 mb-2">{translations[language].password}</Text>
          <TextInput 
            className="border border-gray-600 bg-black-200 text-white p-3 rounded-lg shadow-md"
            placeholder={translations[language].enterPassword}
            secureTextEntry
            placeholderTextColor="#CDCDE0"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        {/* Sign In Button */}
        <TouchableOpacity 
          className="bg-secondary-100 p-3 rounded-lg shadow-md w-full"
          onPress={handleSignIn}
        >
          <Text className="text-white text-center font-semibold text-lg">
            {translations[language].signIn}
          </Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <TouchableOpacity className="mt-4" onPress={() => router.push('/sign-up')}>
          <Text className="text-center text-gray-400">
            {translations[language].dontHaveAccount}{' '}
            <Text className="text-secondary-100 font-semibold">
              {translations[language].signUp}
            </Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
