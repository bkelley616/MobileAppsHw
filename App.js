import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './styles';
import HomeView from './src/screens/Home';
import ExpandImageView from './src/screens/ExpandImage';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'HW17',
            headerTitleStyle: {
              color: Colors.primary,
            },
            headerStyle: {
              backgroundColor: Colors.accent,
            },
            backgroundColor: Colors.primary,
          }}
        />
        <Stack.Screen
          name="ExpandImage"
          component={ExpandImageView}
          options={{
            title: 'Full Image',
            headerTitleStyle: {
              color: Colors.primary,
            },
            headerStyle: {
              backgroundColor: Colors.accent,
            },
            backgroundColor: Colors.primary,
            headerTintColor: Colors.primary
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
