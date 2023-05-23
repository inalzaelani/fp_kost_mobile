import * as React from 'react';
import { View, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import LottieView from 'lottie-react-native'; 

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
                            <Text style={styles.cardText}>Pengumuman</Text>
                            <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et ea molestiae amet natus repudiandae dicta voluptates quisquam officiis aut facere in sapiente suscipit, aperiam dolore magni soluta beatae, repellendus nobis?</Text>
                        </View>
                    </View>
            <Navigation active='Home'/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F7',
    },
    itemContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: '#F9F7F7',
    },
    cardContainer: {
        flex:1,
        backgroundColor: '#DBE2EF',
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
