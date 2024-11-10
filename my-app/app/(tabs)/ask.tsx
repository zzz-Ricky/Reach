import React, { useState } from "react";
import { Text, View, TextInput, Button, TouchableOpacity, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from 'react-native-image-picker';

export default function Ask() {
  const [userName, setUserName] = useState("");
  const [peopleNeeded, setPeopleNeeded] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [taskImage, setTaskImage] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());

  const handleImagePicker = (setImage: any) => {
    // Your image picker logic here
  };
  const handleSubmit = () => {
    if (!userName || !peopleNeeded || !taskDescription || !latitude || !longitude) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    Alert.alert("Success", "Request submitted successfully!");
    console.log({
      userName,
      peopleNeeded: parseInt(peopleNeeded),
      taskDescription,
      profileImage,
      taskImage,
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      createdAt,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>



        <Text style={styles.header}>Need Assistance?</Text>

        {/* User Name */}
        <TextInput
          style={styles.input}
          placeholder="Enter your name..."
          placeholderTextColor="#888"
          value={userName}
          onChangeText={setUserName}
        />

        {/* Number of People Needed */}
        <TextInput
          style={styles.input}
          placeholder="Enter number of people needed..."
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={peopleNeeded}
          onChangeText={setPeopleNeeded}
        />

        {/* Task Description */}
        <TextInput
          style={[styles.input, styles.taskDescriptionInput]}
          placeholder="Enter task description..."
          placeholderTextColor="#888"
          multiline
          scrollEnabled
          value={taskDescription}
          onChangeText={setTaskDescription}
        />

        {/* Task Image Picker */}
        <TouchableOpacity style={styles.imagePicker} onPress={() => handleImagePicker(setTaskImage)}>
          <Text style={styles.imagePickerText}>Pick Task Image</Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F0F8FF",
  },
  svg: {
    marginBottom: 20,
    alignSelf: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },

  taskDescriptionInput: {
    maxHeight: 100,
  },
  imagePicker: {
    backgroundColor: "#007bff",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  imagePickerText: {
    color: "#fff",
  },
  submitButton: {
    backgroundColor: "#53c972",
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 20
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
