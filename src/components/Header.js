import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
    <StatusBar barStyle='light-content' hidden={false} backgroundColor='#FDCEDF'/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2BED1',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:3
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#FFFF'
  },
});

export default Header;
