import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Colors } from './styles'
import HomeView from './src/screens/Home';
import AddContactsView from './src/screens/AddContact';
import { ContactsContextProvider } from './src/Context'




const Stack = createStackNavigator();

const App = () => {

  return (
    
    <NavigationContainer>
      <ContactsContextProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'Home',
            headerTitleStyle: {
                color: Colors.primary,
              },
            headerStyle: {
            backgroundColor: Colors.accent,
            },
            backgroundColor: Colors.primary
          }}
        />
        <Stack.Screen
          name="AddContacts"
          component={AddContactsView}
          options={{
            title: 'Add Contacts',
            headerTitleStyle: {
                color: Colors.primary,
              },
            headerStyle: {
            backgroundColor: Colors.accent,
            },
            headerTintColor: Colors.primary,
            backgroundColor: Colors.primary
          }}
        />
      </Stack.Navigator>
      </ContactsContextProvider>
    </NavigationContainer>
  );
};

export default App;