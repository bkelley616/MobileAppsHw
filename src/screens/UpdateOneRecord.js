// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to update the user

import React, {useState} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import {Colors} from '../../styles';

const styles = StyleSheet.create({
  button: {
    margin: 32,
    padding: 8,
    fontSize: 20,
    alignItems: 'center',
    backgroundColor: Colors.blue,
    borderRadius: 5,
    width: '70%',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const UpdateOneRecordView = ({navigation}) => {
  let [inputUserId, setInputUserId] = useState('');
  let [userName, setUserName] = useState('');
  let [userContact, setUserContact] = useState('');
  let [userAddress, setUserAddress] = useState('');

  let updateAllStates = (name, contact, address) => {
    setUserName(name);
    setUserContact(contact);
    setUserAddress(address);
  };

  let searchUser = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          if (len > 0) {
            let res = results.rows.item(0);
            updateAllStates(res.user_name, res.user_contact, res.user_address);
            ToastAndroid.show("Contact Found!", ToastAndroid.SHORT)
          } else {
            alert('No Contact found');
            updateAllStates('', '', '');
          }
        },
      );
    });
  };
  let updateUser = () => {
    console.log(inputUserId, userName, userContact, userAddress);

    if (!inputUserId) {
      alert('Please fill User id');
      return;
    }
    if (!userName) {
      alert('Please fill name');
      return;
    }
    if (!userContact) {
      alert('Please fill Number');
      return;
    }
    if (!userAddress) {
      alert('Please fill Email Address');
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE table_user set user_name=?, user_contact=? , user_address=? where user_id=?',
        [userName, userContact, userAddress, inputUserId],
        (tx, results) => {
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User updated successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => navigation.navigate('Home'),
                },
              ],
              {cancelable: false},
            );
          } else alert('Update Failed');
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <KeyboardAvoidingView
              behavior="padding"
              style={{flex: 1, justifyContent: 'space-between'}}>
              <TextInput
                placeholder="Enter Contact Id"
                style={{padding: 10}}
                onChangeText={(inputUserId) => setInputUserId(inputUserId)}
              />
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={searchUser}>
                  <Text style={styles.buttonText}>Find Contact</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  borderBottomColor: Colors.blue,
                  borderBottomWidth: 3,
                  marginBottom: 50
                }}
              />
              <TextInput
                placeholder="Name"
                value={userName}
                style={{padding: 10}}
                onChangeText={(userName) => setUserName(userName)}
              />
              <TextInput
                placeholder="Number"
                value={'' + userContact}
                onChangeText={(userContact) => setUserContact(userContact)}
                maxLength={10}
                style={{padding: 10}}
                keyboardType="numeric"
              />
              <TextInput
                value={userAddress}
                placeholder="Email"
                onChangeText={(userAddress) => setUserAddress(userAddress)}
                maxLength={225}
                numberOfLines={5}
                multiline={true}
                style={{textAlignVertical: 'top', padding: 10}}
              />
              <View style={{alignItems: 'center'}}>
                <TouchableOpacity style={styles.button} onPress={updateUser}>
                  <Text style={styles.buttonText}>Update Contact</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateOneRecordView;
