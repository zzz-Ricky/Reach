import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default function Profile() {
    const userName = 'John Doe';
    const userPoints = 1200;
    const userProfilePic = 'https://example.com/path-to-your-profile-pic.jpg';

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image
                    source={{ uri: userProfilePic }} 
                    style={styles.profilePic}
                />
                <Text style={styles.name}>{userName}</Text>
                <Text style={styles.points}>Points: {userPoints}</Text>
            </View>
            <View style={styles.additionalInfoContainer}>
                <Text style={styles.additionalInfo}>Level: Expert</Text>
                <Text style={styles.additionalInfo}>Joined: Jan 2023</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF',
        padding: 20,
    },
    profileContainer: {
        width: '90%',
        maxWidth: 350,
        padding: 30,
        borderRadius: 20,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
        marginBottom: 20,
    },
    profilePic: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 20,
        borderWidth: 4,
        borderColor: '#007bff',
    },
    name: {
        fontSize: 28,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    points: {
        fontSize: 18,
        color: '#555',
        marginBottom: 15,
    },
    additionalInfoContainer: {
        width: '90%',
        maxWidth: 350,
        padding: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 15,
        elevation: 5,
        alignItems: 'center',
    },
    additionalInfo: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
});
