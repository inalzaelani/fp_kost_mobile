import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import LottieView from 'lottie-react-native'; 

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
     <LottieView
          source={require('../../assets/93492-home-icon.json')} 
          style={{width:100,height:100}}
          autoPlay
          loop
        />
      <Text style={{}}>Sistem Pengelolaan Rumah Kost</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DBE2EF',
  },
  image: {
    width: '80%',
    height: '80%',
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
  }
});

export default SplashScreen;
