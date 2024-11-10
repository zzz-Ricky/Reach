import React from 'react';
import { View, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import UserCard from '@/components/userCard';

const users = [
  {
    id: '1',
    name: 'Granny',
    message: 'Fixed Laptop!!! Oh my god, laptop is working.',
    image: 'https://picsum.photos/200/300',
    timestamp: new Date().toISOString(),
  },
];

export default function Index() {
  const renderItem = ({ item }: any) => (
    <UserCard 
      name={item.name} 
      message={item.message} 
      image={item.image}
      timestamp={item.timestamp}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  listContainer: {
    padding: 16,
  },
  separator: {
    height: 12,
  },
});