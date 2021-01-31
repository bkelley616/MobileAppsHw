import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './styles';
import HomeView from './src/screens/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="HW4"
          component={HomeView}
          options={{
            title: 'HW4',
            headerTitleStyle: {
              color: Colors.primary,
            },
            headerStyle: {
              backgroundColor: Colors.accent,
            },
            backgroundColor: Colors.primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
