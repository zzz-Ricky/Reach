import React from 'react';
import { View, Text, StyleSheet, Image, Button, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Card = ({ pfp, name = "Granny", score, nature = "Post", personsRequired = "", title = "Fixed Laptop!!!", message = "Oh my gah, my lapop is fixer", picture = "https://media.istockphoto.com/id/157524164/photo/surprised-or-shocked-senior-woman-grandmother-at-computer.jpg?s=612x612&w=0&k=20&c=wDwXI9Fqecx4za1x6vGnn6e5t2uzdXSy2hvDe4DWi6k=", reachButton }) => {
    return (
        <View style={styles.container}>
            <View style={styles.heading}>
                <Image style={styles.pfp} />
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.score}>{score}</Text>
                <Text style={styles.nature}>{nature}</Text>
                <Text>
                    {personsRequired !== "" && " | "}
                    <Text style={styles.personsRequired}>{personsRequired}</Text>
                </Text>
            </View>
            <View style={styles.subCard}>
                <View styles={styles.leftSubCard}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>
                </View>
                <View styles={styles.rightSubCard}>
                    <Image
                        style={styles.picture}
                        source={{ uri: picture }} // `picture` is a URL or URI string
                    />

                </View>
            </View>
            <View style={reachButton}>
                <Button title={"Reach"} style={styles.reachButton}>{reachButton}</Button>
            </View>

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
        maxWidth: width - 20,
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
        borderWidth: 2,
        borderColor: "black",
        backgroundColor: "red",
    }
});

export default Card;
