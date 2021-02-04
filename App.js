import React, {useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './styles';
import HomeView from './src/screens/Home';
import HeaderView from './src/screens/Home'
import {HeaderButtonContextProvider, HeaderButtonContext} from './src/Context';

const Stack = createStackNavigator();

const App = () => {


  return (
    <NavigationContainer>
      <HeaderButtonContextProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'HW9',
            headerStyle: {
              backgroundColor: Colors.accent,
            },
            headerTintColor: Colors.primary,
            backgroundColor: Colors.primary,
          }}
        />
      </Stack.Navigator>
      </HeaderButtonContextProvider>
    </NavigationContainer>
  );
};

export default App;
