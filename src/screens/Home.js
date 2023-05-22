import * as React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Lottie from 'lottie-react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header title='Home' />
                    <View style={styles.itemContainer}>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardText}>Tanggal Pembayaran Berikutnya</Text>
                            <Text>22-06-2023</Text>
                        </View>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardText}>Lorem Ipsum</Text>
                        </View>
                    </View>
            <Navigation />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F5F6',
    },
    itemContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
    },
    cardContainer: {
        flex:1,
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        marginBottom: 10,
    },
    cardText: {
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default Home;
