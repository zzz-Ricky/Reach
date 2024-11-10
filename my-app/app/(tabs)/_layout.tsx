import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import { Stack } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerLeft: () => (
                        <Image style={styles.image} source={require("../../assets/images/Reach.png")} />
                    ),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ask"
                options={{
                    title: 'Ask',
                    headerLeft: () => (
                        <Image style={styles.image} source={require("../../assets/images/Reach.png")} />
                    ),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="handshake-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="request"
                options={{
                    title: 'Requests',
                    headerLeft: () => (
                        <Image style={styles.image} source={require("../../assets/images/Reach.png")} />
                    ),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
                }}
            />
            <Tabs.Screen
                name="leaderboards"
                options={{
                    title: 'Leaderboards',
                    headerLeft: () => (
                        <Image style={styles.image} source={require("../../assets/images/Reach.png")} />
                    ),
                    tabBarIcon: ({ color }) => <SimpleLineIcons name="trophy" size={24} color={color} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerLeft: () => (
                        <Image style={styles.image} source={require("../../assets/images/Reach.png")} />
                    ),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
        </Tabs>
    );
}

const styles = StyleSheet.create({
    image: {
        maxHeight: 50,
        resizeMode: 'contain',
        width: '30%',
        left: 10,
    }

});