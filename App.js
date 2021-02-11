import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Colors} from './styles';
import HomeView from './src/screens/Home';

import {ToastAndroid} from 'react-native';

import SQLite from 'react-native-sqlite-storage';
import InsertView from './src/screens/Insert';
import ReadAllRecordsView from './src/screens/ReadAllRecords';
import ReadOneRecordView from './src/screens/ReadOneRecord';
import UpdateOneRecordView from './src/screens/UpdateOneRecord'
import DeleteOneRecordView from './src/screens/DeleteOneRecord';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{
            title: 'HW14',
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
          name="InsertView"
          component={InsertView}
          options={{
            title: 'Insert',
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
        <Stack.Screen
          name="ReadAllRecordsView"
          component={ReadAllRecordsView}
          options={{
            title: 'Read All Records',
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
        <Stack.Screen
          name="ReadOneRecordView"
          component={ReadOneRecordView}
          options={{
            title: 'Read One Record',
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
        <Stack.Screen
          name="UpdateOneRecordView"
          component={UpdateOneRecordView}
          options={{
            title: 'Update One Record',
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
        <Stack.Screen
          name="DeleteOneRecordView"
          component={DeleteOneRecordView}
          options={{
            title: 'Delete One Record',
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
