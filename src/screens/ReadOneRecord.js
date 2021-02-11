// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view single user

import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../styles';

import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'UserDatabase.db'});

const ReadOneRecordView = () => {
  let [inputUserId, setInputUserId] = useState('');
  let [userData, setUserData] = useState({});

  let searchUser = () => {
    console.log(inputUserId);
    setUserData({});
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM table_user where user_id = ?',
        [inputUserId],
        (tx, results) => {
          var len = results.rows.length;
          console.log('len', len);
          if (len > 0) {
            setUserData(results.rows.item(0));
          } else {
            alert('No user found');
          }
        },
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{flex: 1}}>
          <TextInput
            placeholder="Enter User Id"
            onChangeText={(inputUserId) => setInputUserId(inputUserId)}
            style={{padding: 10}}
          />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                margin: 32,
                padding: 8,
                fontSize: 20,
                alignItems: 'center',
                backgroundColor: Colors.blue,
                borderRadius: 5,
                width: '70%',
              }}
              onPress={searchUser}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Search Contact</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginLeft: 35,
              marginRight: 35,
              marginTop: 10,
            }}>
            <Text>User Id: {userData.user_id}</Text>
            <Text>Name: {userData.user_name}</Text>
            <Text>Number: {userData.user_contact}</Text>
            <Text>Email: {userData.user_address}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ReadOneRecordView;
