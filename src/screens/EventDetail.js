import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EventDetail = ({ route }) => {
  const { event } = route.params;
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Event Detail"
      />
      <View style={styles.card}>
        <Text style={styles.eventName}>{event.name}</Text>
        <Text style={styles.eventDate}>{event.date}</Text>
        <Text style={styles.eventDescription}>{event.description}</Text>
      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9DE',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 20,
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  eventDate: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 16,
  },
});

export default EventDetail;
