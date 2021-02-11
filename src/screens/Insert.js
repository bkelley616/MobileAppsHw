// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to register the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';

import {Colors} from '../../styles';

var db = openDatabase({name: 'UserDatabase.db'});

const styles = StyleSheet.create({
  promptText: {
    padding: 16,
    fontSize: 20,
  },
  textEntry: {
    padding: 10,
    textAlignVertical: 'top',
  },
  submitButton: {
    margin: 32,
    padding: 8,
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: Colors.green,
    borderRadius: 5,
    width: '70%',
  },
  submitText:{
    fontSize: 20,
    fontWeight: 'bold'
  }
});

const InsertView = ({navigation}) => {
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let register_user = () => {
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Contact Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Email Address');
      return;
    }

    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO table_user (user_name, user_contact, user_address) VALUES (?,?,?)',
        [userName, userContact, userAddress],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'Contact Added Successfully!',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Registration Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.promptText}>Enter Contact Details below:</Text>
        </View>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'flex-start'}}>
              <TextInput
                placeholder="Name"
                onChangeText={(userName) => setUserName(userName)}
                style={styles.textEntry}
              />
              <TextInput
                placeholder="Number"
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                keyboardType="numeric"
                style={styles.textEntry}
              />
              <TextInput
                placeholder="Email"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={styles.textEntry}
              />
              <View style={{alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.submitButton}
                onPress={register_user}>
                <Text style={styles.submitText}>Insert</Text>
              </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default InsertView;
