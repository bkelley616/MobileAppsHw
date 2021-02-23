import React, {useState, useEffect, useRef} from 'react';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
  channelId: 'HW19',
  channelName: 'Homework 19 Demo',
});

PushNotification.configure({
  onRegister: function (token) {},
  onNotification: function (notification) {
    alert(
      'You just clicked the notification which brought you to the home activity!',
    );
  },
  onAction: function (notification) {},

  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  popInitialNotification: true,
  requestPermissions: false,
});

import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
  View,
  Text,
  TextInput,
  Alert,
} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  mainText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
  button: {
    backgroundColor: Colors.blue,
    width: 200,
    alignSelf: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 16,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20
  },
});

const HomeView = ({navigation}) => {
  const sendNotification = () => {
    PushNotification.localNotification({
      channelId: 'HW19',
      title: 'Notification from HW19!',
      message: 'Click me to return back to the home screen!',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>Welcome to the home screen of HW#19!</Text>
      <TouchableOpacity style={styles.button} onPress={sendNotification}>
        <Text style={styles.buttonText}>Send notification!</Text>
      </TouchableOpacity>
      <Text style={styles.subText}>After sending the notification, exit the application and click the notification!</Text>
    </View>
  );
};

export default HomeView;
