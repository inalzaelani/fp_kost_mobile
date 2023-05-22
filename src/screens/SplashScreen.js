import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import Lottie from 'lottie-react-native'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
    <Lottie 
      source={require('../../assets/75123-homeicon.json')}
      styles={{width : 200, height: 200}}
    />
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '80%',
    height: '80%',
  },
});

export default SplashScreen;
