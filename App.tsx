import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import Home from './src/screens/Home';
import LoginScreen from './src/screens/LoginScreen';
import Payment from './src/screens/Payment';
import Event from './src/screens/Event';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{headerShown:false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='Event' component={Event}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;