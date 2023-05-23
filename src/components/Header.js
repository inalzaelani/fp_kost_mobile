import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content' hidden={false} backgroundColor='#ACB1D6'/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#112D4E',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#F9F7F7'
  },
});

export default Header;
