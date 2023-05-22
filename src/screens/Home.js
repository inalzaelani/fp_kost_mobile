import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title='Home'/>
            <View style={styles.itemContainer}>
                <Text>Home</Text>
            </View>
            <Navigation/>
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        flex:1,
        backgroundColor : '#FFFF',
    },
    itemContainer : {
        flex :1,
        marginHorizontal:20,
        marginVertical:10
    }
})

export default Home;
