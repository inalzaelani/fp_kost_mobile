import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native'; 
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword,setShowPassword] = useState(false)
  const navigation = useNavigation();

  const handleLogin = () => {
    // const userData = {
    //   email: email,
    //   password: password
    // };

    // setIsLoading(true);

    // axios
    //   .post('http://kost-dev-env.us-east-1.elasticbeanstalk.com/auth/login', userData)
    //   .then((response) => {
    //     const data = response.data;
    //     if (data.success) {
    //       navigation.navigate('Home');
    //       Alert.alert('Login Successful');
    //     } else {
    //       Alert.alert('Invalid email or password');
    //       console.log(data);
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //     if (error.response && error.response.data) {
    //       console.log('Response data:', error.response.data);
    //       Alert.alert('An error occurred during login: ' + error.response.data.message);
    //     } else {
    //       Alert.alert('An error occurred during login');
    //     }
    //   })
    //   .finally(() => {
    //     setIsLoading(false);
    //   });

    navigation.navigate('Home');
  };

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../../assets/112563-home.json')}
          style={styles.animation}
          autoPlay
          loop
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!showPassword}
            onChangeText={setPassword}
            value={password}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.visibilityButton}>
            <Icon name={showPassword ? 'eye-slash' : 'eye'} size={20} color="#888" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </TouchableOpacity>
      </View>
      <Text style={styles.bottomText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, repellendus?!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F9F7F7',
  },
  animationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  animation: {
    width: 200,
    height: 200,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    width: 380,
    paddingVertical: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visibilityButton: {
    position: 'absolute',
    right: 10,
    height: '100%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#3F72AF',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottomText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
    color: '#888',
  },
});

export default LoginScreen;