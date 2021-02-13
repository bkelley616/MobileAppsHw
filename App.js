import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './styles';
import HomeView from './src/screens/Home';
import BrowseAllView from './src/screens/BrowseAll';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'HW15',
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
          name="BrowseAllScreen"
          component={BrowseAllView}
          options={{
            title: 'All Books',
            headerTitleStyle: {
              color: Colors.primary,
            },
            headerStyle: {
              backgroundColor: Colors.accent,
            },
            headerTintColor: Colors.primary,
            backgroundColor: Colors.primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
