// index.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router'; // Import the router to navigate to the next screen after login

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Router instance to navigate

  const handleLogin = () => {
    if (username && password) {
      // Simple validation (you can replace this with actual authentication)
      // If login is successful, navigate to the "(tabs)" screen
      router.push('(tabs)'); // Navigate to the tabs after successful login
    } else {
      alert('Please fill in both username and password');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Image style={styles.image} source = {require ("../assets/images/Reach.png")} />
      <Text style={styles.title}>Login</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button title="Login" onPress={handleLogin} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  image: {
    height: "10%",
    resizeMode: 'contain',
  },
});
