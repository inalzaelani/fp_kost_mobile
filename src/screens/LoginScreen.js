import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const navigation = useNavigation();

  const handleLogin = () => {
    // axios
    //   .get('http://localhost:3000/users')
    //   .then((response) => {
    //     const data = response.data;
    //     const user = data.users.find(
    //       (user) => user.username === username && user.password === password
    //     );
    //     if (user) {
    //       // Successful login
    //       Alert.alert('Login Successful');
    //     } else {
    //       // Invalid credentials
    //       Alert.alert('Invalid username or password');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });

    navigation.navigate('Home')

    
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
