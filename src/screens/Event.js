import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Event = () => {
  // Sample data for events
  const events = [
    { id: '1', name: 'Event 1', description: 'Lorem Ipsum', date: 'May 25, 2023' },
    { id: '2', name: 'Event 2', description: 'Lorem Ipsum', date: 'June 1, 2023' },
    { id: '3', name: 'Event 3', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '4', name: 'Event 4', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '5', name: 'Event 5', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '6', name: 'Event 6', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '7', name: 'Event 7', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '8', name: 'Event 8', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '9', name: 'Event 9', description: 'Lorem Ipsum', date: 'June 10, 2023' },
    { id: '10', name: 'Event 10', description: 'Lorem Ipsum', date: 'June 10, 2023' }
  ];

  const navigation = useNavigation();

  const handleEventPress = (event) => {
    navigation.navigate('EventDetail', { event });
  };

  const renderEventCard = ({ item }) => (
    <TouchableOpacity onPress={() => handleEventPress(item)}>
      <View style={styles.card}>
        <Text style={styles.eventName}>{item.name}</Text>
        <Text style={styles.eventDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header title="Event" />
      <FlatList
        data={events}
        renderItem={renderEventCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.itemContainer}
      />
      <Navigation active="Event" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F7',
  },
  itemContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  card: {
    backgroundColor: '#DBE2EF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 10,
  },
  eventName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 14,
    color: '#888',
  },
});

export default Event;
