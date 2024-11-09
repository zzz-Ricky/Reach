import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const LBEntry = ({ rank, name, score }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.rank}>#{rank}</Text>
            <Image style={styles.icon} />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.score}>{score} Points</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        margin: 10,
    },
    rank: {
        fontSize: 26,
        fontWeight: 'bold',
        marginRight: 10,
        color: '#333',
        width: 40,
    },
    name: {
        fontSize: 16,
        flex: 1,
        color: '#555',
    },
    score: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
    },
    icon: {
        height: 38,
        width: 38,
        backgroundColor: "#808080",
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 18,
    },
});

export default LBEntry;
