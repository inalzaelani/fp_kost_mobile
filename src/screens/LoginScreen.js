import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Lottie from 'lottie-react-native'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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

  return (
    <View style={styles.container}>
      <View>
        <Lottie 
        source={require('../../assets/75123-homeicon.json')}
        />
      </View>

      <View>
          <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={isLoading}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#FFFFFF" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>
      </View>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 12,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#F2BED1',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
