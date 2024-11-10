import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function Ask() {
  const [userName, setUserName] = useState("");
  const [peopleNeeded, setPeopleNeeded] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [taskImage, setTaskImage] = useState(null);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [createdAt, setCreatedAt] = useState(new Date().toISOString());

  const handleImagePicker = async (setTaskImage: React.Dispatch<React.SetStateAction<string | null>>) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setTaskImage(result.uri);
    }
  };

  const handleSubmit = async () => {
    if (!userName || !peopleNeeded || !taskDescription) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const data = new FormData();
    data.append("user_name", userName);
    data.append("people_needed", peopleNeeded);
    data.append("task_description", taskDescription);
    data.append("latitude", latitude);
    data.append("longitude", longitude);
    data.append("created_at", createdAt);

    if (taskImage) {
      const taskImageUri = taskImage;
      const localUri = taskImageUri;
      const filename = localUri.split('/').pop();
      const match = /\.(\w+)$/.exec(filename ?? '');
      const type = match ? `image/${match[1]}` : 'image';
      data.append("task_picture", {
        uri: localUri,
        name: filename,
        type,
      });
    }

    try {
      const response = await axios.post("http://127.0.0.1:8000/ask-for-help/", data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
      Alert.alert("Success", "Request submitted successfully!");
      console.log(response.data);
    } catch (error) {
      // Check if the error has a response from the server
      if (error.response) {
        // Server responded with a status code outside the 2xx range
        console.error("Server Error:", error.response);
        Alert.alert("Error", `Request failed with status: ${error.response.status}\nMessage: ${error.response.data?.detail || 'Unknown error'}`);
      } else if (error.request) {
        // Request was made but no response received (e.g., network issues)
        console.error("Network Error:", error.request);
        Alert.alert("Error", "No response received from the server. Please check your internet connection.");
      } else {
        // Something went wrong while setting up the request
        console.error("Request Setup Error:", error.message);
        Alert.alert("Error", `An error occurred: ${error.message}`);
      }
    }

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
  },
  imagePicker: {
    backgroundColor: "#007bff",
    padding: 10,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: "#53c972",
    padding: 15,
    alignItems: "center",
    borderRadius: 25,
    marginBottom: 15,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
  },
});
