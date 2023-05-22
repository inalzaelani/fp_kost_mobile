import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Event = () => {
      return (
        <View style={styles.container}>
            <Header title='Event'/>
                <Text style={styles.itemContainer}>Event</Text>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#F9F5F6',
    },
    itemContainer : {
        flex :1,
        marginHorizontal:20,
        marginVertical:10,
    }
})

export default Event;