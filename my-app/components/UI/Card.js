import React from 'react';
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Card = ({ pfp, name = "Granny", score, nature = "Unknown", personsRequired = "N/A", title = "Placeholder", message = "This is a sample description", picture, reachButton }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Image style={styles.pfp} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.score}>{score}</Text>
                <Text style={styles.nature}>{nature}</Text>
                <Text style={styles.personsRequired}>{personsRequired}</Text>
            </View>
            <View style={styles.subCard}>
                <View styles={styles.leftSubCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View styles={styles.rightSubCard}>
                    <Image style={styles.picture} />
                </View>
            </View>
            <Button title={"Reach"} style={styles.reachButton}>{reachButton}</Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        margin: 10,
        borderColor: '#808080', // Set border color to match the previous background color
        borderWidth: 2, // Add width for the border to make the outline visible
        borderRadius: 12, // Rounded corners for the card
        maxWidth: width - 10,
    },
    heading: {
        display: "flex",
        flexDirection: "row",
    },
    subCard: {
        display: "flex",
        flexDirection: "row",
        minHeight: 50,
        minWidth: "80%",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 15,
        backgroundColor: "#ececec",
        padding: 24,
        marginHorizontal: 18,
        marginVertical: 24,
    },
    pfp: {
        height: 38,
        width: 38,
        backgroundColor: "#808080",
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 18,
        paddingBottom: 2,
    },

    name: {
        fontSize: 16,
        flex: 1,
        color: '#555',
    },

    score: {

    },

    nature: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF'
    },

    personsRequired: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF'
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF'
    },

    message: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007BFF',
        minWidth: "50%",
    },

    picture: {
        backgroundColor: "#808080",
        minHeight: 200,
        minWidth: "50%",
        zIndex: 3,
        borderRadius: 15,
    },

    reachButton: {

    }
});

export default Card;
