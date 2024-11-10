import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const UserCard = ({ name, message, image, timestamp, onPress }: any) => {
  const formatTimestamp = (dateString: any) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Pressable 
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { opacity: pressed ? 0.7 : 1 }
      ]}
    >
      <Shadow 
        distance={5} 
        startColor={'#00000010'} 
        offset={[0, 3]}
      >
        <View style={styles.cardContent}>
          <View style={styles.header}>
            <Image
              source={{ uri: image }}
              style={styles.avatar}
            />
            <View style={styles.headerText}>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.timestamp}>
                {formatTimestamp(timestamp)}
              </Text>
            </View>
          </View>
          
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </Shadow>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    width: '100%',
    marginBottom: 12,
    elevation: 5,
  },
  cardContent: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
    backgroundColor: '#e1e1e1',
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a1a1a',
  },
  timestamp: {
    fontSize: 12,
    color: '#666666',
    marginTop: 2,
  },
  messageContainer: {
    paddingVertical: 8,
  },
  message: {
    fontSize: 16,
    color: '#333333',
    lineHeight: 22,
  },
});

export default UserCard;